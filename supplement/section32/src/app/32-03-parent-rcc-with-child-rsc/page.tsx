"use client";

import Rsc from ".";

export default function ParentRccWithChildRscPage() {
  console.log("클라이언트 컴포넌트가 렌더링 되었습니다.");

  return (
    <>
      <div>저는 부모입니다.</div>
      <Rsc />
    </>
  );
}
