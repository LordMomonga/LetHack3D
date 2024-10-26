import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("autostop-session");
    if (!serializedState) {
      return undefined;
    }
    const session = JSON.parse(serializedState);
    const now = dayjs().unix()

    if (session.expired < now) {
      localStorage.removeItem("autostop-session")
      return undefined
    }
    return session;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("autostop-session", serializedState);
  } catch (err) {
    console.error("Error saving state to LocalStorage:", err);
  }
};

const initialState = loadState() || {
  connected: false,
  user: {
    id: 0,
    username: "",
    email: "",
    roles: [""],
    token: "",
  },
  expiredAt: undefined
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,

  reducers: {
    connect: (state, action) => {
      const expirationDate = dayjs().add(1, "day").unix(); // 1 jour

      const { payload } = action;
      state.connected = payload.connected;
      state.expiredAt = expirationDate;
      state.user = payload.user;
      saveState(state);
    },

    disconnect: (state) => {
      state.connected = false;
      state.expiredAt = undefined;
      state.user = {
        id: 0,
        username: "",
        email: "",
        roles: [""],
        token: "",
      }
      saveState(state);
    },

    updateUserSession: (state, action) => {
      const { payload } = action;
      state.connected = payload.connected;
      state.expiredAt = payload.expiredAt;
      state.user = payload.user;
      saveState(state);
    },
  },
});

export const { connect, disconnect, updateUserSession } = sessionSlice.actions;
