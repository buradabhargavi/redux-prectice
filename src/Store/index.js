import redux from "react-redux";

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
  if (action.type === "DECREMENTBY2") {
    return {
      count: state.count - 2,
    };
  }
  if (action.type === "INCREMENTBY2") {
    return {
      count: state.count + 2,
    };
  }
  return state;
};

const Store = redux.createStore(counter);

export default Store;
