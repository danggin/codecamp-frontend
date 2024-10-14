import React from "react";

export default function CounterDown({ count, setCount }) {
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>Child 1: {count}</div>
      <button onClick={minus}>-</button>
    </>
  );
}
