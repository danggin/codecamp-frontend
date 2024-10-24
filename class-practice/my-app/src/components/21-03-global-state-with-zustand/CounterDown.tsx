"use client";

import { useCountStore } from "@/commons/stores/21-03-count-store";

export default function CounterDown() {
  const { count, setCount } = useCountStore();

  const onClickCountDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>Child 2: {count}</div>
      <button onClick={onClickCountDown}>-</button>
    </>
  );
}
