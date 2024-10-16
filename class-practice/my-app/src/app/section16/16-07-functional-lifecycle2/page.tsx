"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(1);

  // 1. useEffect 하나로 합치기
  useEffect(() => {
    console.log("MOUNT: 그려지고 나서 실행!");
    // ex. api 요청, input의 포커스 깜빡깜빡 등등

    // 3. componentWillUnmount와 동일
    return () => {
      console.log("UNMOUNT: 사라지기 전에 실행!");
      // ex. 채팅방 나가기 API 요청, 불필요한 타이머 삭제 등 청소
    };
  });
  // 의존성 배열 Dependency Array : props나 state같은 변경되었을 때 리렌더되는 것들이 들어가야 함
  // 빈 배열일 때는 처음 실행되고 나서 한번만 실행됨 = ComponentDidMount
  // 의존성 배열을 인자로 넣지 않으면 어떤 것이든 변경되면 리렌더링 됨 = ComponentDidUpdate

  // 2. 잘못된 useEffect 사용법 (추가 렌더링, 무한루프) => useEffect 안에서 setState 사용하는 경우
  // 추가 렌더링
  // useEffect(() => {
  //   setCount(10);
  // }, []);

  // 무한 루프
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  console.log("나는 언제 실행되게?");

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={onClickCountUp}>더하기</button>
      <br />
      <Link href={"/"}>나가기</Link>
    </>
  );
}
