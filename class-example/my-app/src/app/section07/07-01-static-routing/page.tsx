"use client";

import { useRouter } from "next/navigation";

export default function StaticRoutingPage() {
  const router = useRouter();
  // next.js 최신버전에서는 navigation에서 import 해와야 함

  const onClickSubmit = () => {
    router.push("/section07/07-01-static-routing-moved");
  };

  return <button onClick={onClickSubmit}>게시글 등록하기</button>;
}
