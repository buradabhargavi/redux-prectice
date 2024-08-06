import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, show: false };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    INCREMENT(state) {
      state.count++;
    },
    DECREMENT(state, action) {
      state.count = state.count + action.amount;
    },
    TOGGEL(state) {
      state.show = !state.show;
    },
  },
});

const Store = configureStore({
  reducer: counterSlice.reducer,
});

export default Store;
