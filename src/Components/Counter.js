import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const Counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrementBy5 = () => {
    dispatch({ type: "DECREMENTBY5" });
  };
  const handleIncrementBy5 = () => {
    dispatch({ type: "INCREMENTBY5" });
  };
  return (
    <div>
      <h1>Redux counter</h1>
      <div>{Counter}</div>
      <div>
        <button onClick={handleDecrement}>DECREMENT</button>
        <button onClick={handleIncrement}>INCREMENT</button>
      </div>
      <div>
        <button onClick={handleDecrementBy5}>DECREMENT BY 5</button>
        <button onClick={handleIncrementBy5}>INCREMENT BY 5</button>
      </div>
    </div>
  );
}

export default Counter;
