import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { count: 0, show: false };

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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
