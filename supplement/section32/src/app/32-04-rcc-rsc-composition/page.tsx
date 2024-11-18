// "use client" => 페이지는 RSC로 시작 (그렇지 않으면 하위 컴포넌트가 모두 RCC가 되기 때문)

import Rcc from "./01-rcc";
import Rsc from "./02-rsc";

export default function RccRscCompositionPage() {
  console.log("페이지: 서버 컴포넌트가 렌더링되었습니다.");

  return (
    <>
      <div>저는 페이지 컴포넌트입니다.</div>
      <Rcc>
        <Rsc />
      </Rcc>
    </>
  );
}
