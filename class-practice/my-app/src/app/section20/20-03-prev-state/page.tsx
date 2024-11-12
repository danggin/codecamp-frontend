"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  const plus = () => {
    // 1. 기본 방법
    // setCount((prev) => prev + 1);

    // 2. 기본 방법
    // setCount(function (prev) {
    //   // 로직 추가 가능
    //   return prev + 1;
    // });

    // 3. 매개변수 변경
    setCount((next) => next + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={plus}>+</button>
    </>
  );
}
