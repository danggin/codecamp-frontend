"use client";

import { useState } from "react";
import CounterDown from "@/components/14-04-lifting-state-up/CounterDown";
import CounterUp from "@/components/14-04-lifting-state-up/CounterUp";

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  return (
    <>
      <CounterDown count={count} setCount={setCount} />
      <div>ㅡㅡㅡㅡㅡㅡㅡㅡ</div>
      <CounterUp count={count} plus={plus} />
    </>
  );
};

export default Counter;
