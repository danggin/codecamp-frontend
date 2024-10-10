"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  const plus = () => {
    // setCount(count + 1);

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
    </>
  );
}
