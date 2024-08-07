import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice";
import countReducer from "./CounterSlice";

const Store = configureStore({
  reducer: { counter: countReducer, Auth: AuthReducer },
});

export default Store;
