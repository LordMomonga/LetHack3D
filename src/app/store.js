import { sessionSlice } from "../feature/session.slice";
import { userSessionSlice } from "../feature/userSession.slice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    session: sessionSlice.reducer,
    userSession: userSessionSlice.reducer,
  },
});