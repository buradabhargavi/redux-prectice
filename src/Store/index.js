import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { count: 0, show: false };
const initialLoginState = { isLoggedin: false };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    INCREMENT(state) {
      state.count++;
    },
    DECREMENT(state, action) {
      state.count = state.count - action.payload;
    },
    TOGGEL(state) {
      state.show = !state.show;
    },
  },
});

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

const Store = configureStore({
  reducer: { counter: counterSlice.reducer, Auth: AuthSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = AuthSlice.actions;

export default Store;
