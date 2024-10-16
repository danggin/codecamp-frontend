"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(1);

  // 1. componentDidMount 와 동일
  useEffect(() => {
    console.log("MOUNT: 그려지고 나서 실행!");
    // ex. api 요청, input의 포커스 깜빡깜빡 등등
  }, []);

  // 2. componentDidMount + componentDidUpdate와 동일
  useEffect(() => {
    console.log("UPDATE: 변경되고 나서 실행!");
  });

  // 3. componentWillUnmount와 동일
  useEffect(() => {
    // return 부분 => clean up function
    return () => {
      console.log("UNMOUNT: 사라지기 전에 실행!");
      // ex. 채팅방 나가기 API 요청, 불필요한 타이머 삭제 등 청소
    };
  }, []);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={onClickCountUp}>더하기</button>
      <br />
      <Link href={"/"}>나가기</Link>
    </>
  );
}
