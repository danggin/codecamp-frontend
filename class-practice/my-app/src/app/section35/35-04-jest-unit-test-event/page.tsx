"use client";

import { useState } from "react";

export default function JestUnitTestEventPage() {
  const [count, setCount] = useState(0);

  const onClickCountUp = (prev) => {
    setCount(prev + 1);
  };

  return (
    <>
      <div role="count">{count}</div>
      <button role="count-button" onClick={onClickCountUp}>
        더하기
      </button>
    </>
  );
}
