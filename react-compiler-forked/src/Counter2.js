import React from "react";
import useCounter from "./useCounter";

function Counter2() {
  const [count, Increment, Decrement] = useCounter();

  return (
    <>
      <h1> {count} </h1>
      <button onClick={Increment}> Increment</button>
      <button onClick={Decrement}> Decrement</button>
    </>
  );
}
export default Counter2;
