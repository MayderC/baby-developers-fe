import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../features/auth/authSlice";
// ...
export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
