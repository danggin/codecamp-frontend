import React from "react";

export default function CounterUp({ count, plus }) {
  return (
    <>
      <div>Child 2: {count}</div>
      <button onClick={plus}>+</button>
    </>
  );
}
