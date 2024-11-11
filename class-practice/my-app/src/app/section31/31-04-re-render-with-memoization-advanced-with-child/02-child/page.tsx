"use client";

import { memo } from "react";

function ChildPage(props) {
  console.log("자식이 렌더링 됩니다!");

  return (
    <>
      <div>==================</div>
      <div>저는 자식 컴포넌트입니다! {props.count}</div>
      <div>==================</div>
    </>
  );
}

export default memo(ChildPage);
