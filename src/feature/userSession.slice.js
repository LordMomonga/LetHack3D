import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("userSession");
    if (!serializedState) {
      return undefined;
    }
    const userSession = JSON.parse(serializedState);
    const now = dayjs().unix()

    if (userSession.ExpiredAt < now) {
      localStorage.removeItem("userSession")
      return undefined
    }
    return userSession;
  } catch (err) {
    return undefined;
  }
};


const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("userSession", serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};


const initialState = loadState() || {
  scanned: false,
  restaurant: {
    _id: "",
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    password: "",
    plats: [],
    boisson: [],
    tables: [],
  },
  expiredAt: undefined
};

export const userSessionSlice = createSlice({
  name: "userSession",
  initialState,

  reducers: {
    scanned: (state, action) => {
      const expirationDate = dayjs().add(20, "minute").unix(); // 20 minute

      const { payload } = action;
      state.scanned = payload.scanned;
      state.expiredAt = expirationDate
      state.restaurant = payload.restaurant;
      saveState(state);
    },
    closeUserSession: (state) => {
      state.scanned = false;
      state.expiredAt = undefined;
      state.restaurant = {
        _id: "",
        name: "",
        address: "",
        phoneNumber: "",
        email: "",
        password: "",
        plats: [],
        boissons: [],
        tables: [],
      };
      saveState(state);
    },
  },
});

export const { scanned, closeUserSession } = userSessionSlice.actions;
