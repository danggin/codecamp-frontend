"use client";

import { useCallback, useMemo, useState } from "react";

export default function RerenderPage() {
  console.log("컴포넌트가 렌더링 되었습니다.");

  const [countState, setCountState] = useState(0);

  let countLet = 0;

  // 1. 변수 기억 => useMemo()

  // const random = Math.random();
  // console.log(random);
  const randomMemo = useMemo(() => Math.random(), []);
  console.log(randomMemo); // 렌더링 되어도 난수가 변하지않고 저장되어 있음

  // 2. 함수 기억 => useCallback
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    // countLet = countLet + 1;
    countLet += 1;
  }, []);

  // 3. useCallback 주의사항: state까지 기억됨

  const onClickCountState = useCallback(() => {
    setCountState((prev) => prev + 1); // useCallback 안에서는 prev 사용
  }, []);

  // 4. useMemo로 나만의 useCallback 만들기
  const onClickCountStateMemo = useMemo(() => {
    return () => {
      console.log(countState + 1);
      setCountState((prev) => prev + 1);
    };
  }, []);

  return (
    <>
      <div>Count (let): {countLet}</div>
      <button onClick={onClickCountLet}>Count (let) + 1</button>
      <div>Count (state): {countState}</div>
      <button onClick={onClickCountStateMemo}>Count (state) + 1</button>

      {/* 5. 로직과 UI를 함께 쓰기 => 유지보수 힘들고 복잡함 */}
      <div>Count (state): {countState}</div>
      <button
        onClick={useCallback(() => {
          setCountState((prev) => prev + 1);
        }, [])}
      >
        Count (state) + 1
      </button>
    </>
  );
}