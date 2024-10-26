import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { BoissonCart, PlatCart, Variant } from "../_interface";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("restoCart");
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("restoCart", serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};

const isAlreadyInCart = (items, item) => {
  return items.some((plat) => plat._id === item._id);
};

const initialState = loadState() || {
  plats: [],
  boissons: [],
};

export const restoCartSlice = createSlice({
  name: "restoCart",
  initialState,

  reducers: {
    addItemToCart: (state, action) => {
      const { payload } = action;
      const isDuplicate = isAlreadyInCart(state.plats, payload);

      if (!isDuplicate) {
        state.plats = [...state.plats, payload];
        saveState(state);
        toast.success("Le plat a été ajouté au panier.");
      } else {
        toast.info("Le plat a déjà été ajouté. vous avez la possibilité de le modifier dans le panier");
      }
    },
    removeItemFromCart: (state, action) => {
      const { payload } = action;
      state.plats = state.plats.filter((plat) => plat._id !== payload._id);
      saveState(state);
      toast.info("Le plat a été retiré au panier.");
    },

    adjustItemQuantity: (state, action) => {
      const { payload } = action;
      const itemIndex = state.plats.findIndex((plat) => plat._id === payload._id);
      if (itemIndex !== -1) {
        state.plats[itemIndex].quantity = payload.quantity;
        saveState(state);
      }
    },

    setItemVariant: (state, action) => {
      const { payload } = action;
      const itemIndex = state.plats.findIndex((plat) => plat._id === payload.platId);
      if (itemIndex !== -1) {
        state.plats[itemIndex].variant = payload.variant;
        saveState(state);
      }
    },

    addDrinkToCart: (state, action) => {
      const { payload } = action;
      const isDuplicate = isAlreadyInCart(state.boissons, payload);

      if (!isDuplicate) {
        state.boissons = [...state.boissons, payload];
        saveState(state);
        toast.success("La boisson a été ajouté au panier.");
      } else {
        toast.info("La boisson a déjà été ajouté. vous avez la possibilité de le modifier dans le panier");
      }
    },

    removeDrinkFromCart: (state, action) => {
      const { payload } = action;
      state.boissons = state.boissons.filter((boisson) => boisson._id !== payload._id);
      saveState(state);
      toast.info("La boisson a été retiré au panier.");
    },

    adjustDrinkQuantity: (state, action) => {
      const { payload } = action;
      const itemIndex = state.boissons.findIndex((boisson) => boisson._id === payload._id);
      if (itemIndex !== -1) {
        state.boissons[itemIndex].quantity = payload.quantity;
        saveState(state);
      }
    },

    clearCart: (state) => {
      state.plats = [];
      state.boissons = [];
      saveState(state);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  adjustItemQuantity,
  addDrinkToCart,
  setItemVariant,
  removeDrinkFromCart,
  adjustDrinkQuantity,
  clearCart,
} = restoCartSlice.actions;
