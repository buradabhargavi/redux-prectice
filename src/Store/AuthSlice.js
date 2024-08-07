import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = { isLoggedin: false };

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialLoginState,
  reducers: {
    login(state) {
      state.isLoggedin = true;
    },
    logout(state) {
      state.isLoggedin = false;
    },
  },
});
export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;
