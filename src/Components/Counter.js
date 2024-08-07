import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../Store";

function Counter() {
  const Counter = useSelector((state) => state.count);

  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(counterActions.DECREMENT(10));
  };
  const handleIncrement = () => {
    dispatch(counterActions.INCREMENT());
  };
  const handleToggle = () => {
    dispatch(counterActions.TOGGEL());
  };

  return (
    <div>
      <h1>Redux counter</h1>
      {show && <div>{Counter}</div>}
      <div>
        <button onClick={handleDecrement}>DECREMENT</button>
        <button onClick={handleIncrement}>INCREMENT</button>
      </div>
      <div>
        <button onClick={handleDecrement}>DECREMENT BY 5</button>
        <button onClick={handleIncrement}>INCREMENT BY 5</button>
      </div>
      <div>
        <button onClick={handleToggle}>Toggle</button>
      </div>
    </div>
  );
}

export default Counter;
