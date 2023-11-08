import React from "react";
import useCounter from "./useCounter";

function Counter1() {
  const [count, Increment, Decrement] = useCounter(20);

  return (
    <>
      <h1> {count} </h1>
      <button onClick={Increment}> Increment</button>
      <button onClick={Decrement}> Decrement</button>
    </>
  );
}

export default Counter1;
