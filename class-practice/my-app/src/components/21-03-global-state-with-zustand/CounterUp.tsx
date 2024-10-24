"use client";

import { useCountStore } from "@/commons/stores/21-03-count-store";

export default function CounterUp() {
  const { count, setCount } = useCountStore();

  const onClickCountUp = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>Child 1: {count}</div>
      <button onClick={onClickCountUp}>+</button>
    </>
  );
}
