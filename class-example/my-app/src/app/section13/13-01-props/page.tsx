"use client";

import Box from "@/components/13-01-props";

export default function PropsPage() {
  // 1. props 로 값 넘기기
  // <div>++++++ Props Page ++++++</div>
  //   <Box apple={3} />
  //   <div>++++++ Props Page ++++++</div>

  return (
    <>
      <div>++++++ Props Page ++++++</div>
      <Box apple={<button>버튼</button>} />
      <div>++++++ Props Page ++++++</div>
    </>
  );
}
