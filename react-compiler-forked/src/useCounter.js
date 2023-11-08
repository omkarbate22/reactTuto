import React, { useState } from "react";

function useCounter(initialValue = 100) {
  const [count, setCount] = useState(initialValue);

  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }

  return [count, Increment, Decrement];
}

export default useCounter;
