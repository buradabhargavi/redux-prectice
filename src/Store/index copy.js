import { createStore } from "redux";

const counter = (state = { count: 0, show: true }, action) => {
  if (action.type === "INCREMENT") {
    return {
      show: state.show,
      count: state.count + action.amount,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      count: state.count - action.amount,
      show: state.show,
    };
  }

  if (action.type === "TOGGEL") {
    return {
      count: state.count,
      show: !state.show,
    };
  }

  return state;
};

const Store = createStore(counter);

export default Store;
