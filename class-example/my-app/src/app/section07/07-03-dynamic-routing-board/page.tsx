"use client";

import { useRouter } from "next/navigation";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickSubmit1 = () => {
    router.push("/section07/07-03-dynamic-routing-board-moved/1");
  };

  const onClickSubmit2 = () => {
    router.push("/section07/07-03-dynamic-routing-board-moved/2");
  };

  const onClickSubmit3 = () => {
    router.push("/section07/07-03-dynamic-routing-board-moved/3");
  };

  return (
    <div>
      <button onClick={onClickSubmit1}>1번 게시글로 이동하기</button>
      <br />
      <button onClick={onClickSubmit2}>2번 게시글로 이동하기</button>
      <br />
      <button onClick={onClickSubmit3}>3번 게시글로 이동하기</button>
    </div>
  );
}