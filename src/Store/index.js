import { createStore } from "redux";

const counter = (state = { count: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  }
  if (action.type === "DECREMENTBY5") {
    return {
      count: state.count - 5,
    };
  }
  if (action.type === "INCREMENTBY5") {
    return {
      count: state.count + 5,
    };
  }
  return state;
};

const Store = createStore(counter);

export default Store;
