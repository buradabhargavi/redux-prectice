import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const Counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT", amount: 5 });
  };
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", amount: 5 });
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
        <button onClick={handleDecrement}>DECREMENT BY 5</button>
        <button onClick={handleIncrement}>INCREMENT BY 5</button>
      </div>
    </div>
  );
}

export default Counter;
