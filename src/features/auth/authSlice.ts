import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    refreshToken: "",
  },
  reducers: {
    setToken: (state, action) => {
      state = action.payload;
    },
  },
});
// now available:

export const { setToken } = slice.actions;
export default slice.reducer;
