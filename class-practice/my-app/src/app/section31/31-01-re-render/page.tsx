"use client";

import { useState } from "react";

export default function RerenderPage() {
  console.log("컴포넌트가 렌더링 되었습니다.");

  const [countState, setCountState] = useState(0);

  let countLet = 0;

  const onClickCountLet = () => {
    console.log(countLet + 1);
    // countLet = countLet + 1;
    countLet += 1;
  };

  const onClickCountState = () => {
    console.log(countState + 1);

    setCountState(countState + 1);
  };

  return (
    <>
      <div>Count (let): {countLet}</div>
      <button onClick={onClickCountLet}>Count (let) + 1</button>
      <div>Count (state): {countState}</div>
      <button onClick={onClickCountState}>Count (state) + 1</button>
    </>
  );
}
