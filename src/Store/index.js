import { createStore } from "redux";

const counter = (state = { count: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + action.amount,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      count: state.count - action.amount,
    };
  }

  return state;
};

const Store = createStore(counter);

export default Store;
