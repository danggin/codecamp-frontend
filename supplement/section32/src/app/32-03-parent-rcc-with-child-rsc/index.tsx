// "use client"를 붙이지 않았지만 부모 컴포넌트가 RCC이므로 RCC처럼 작동

export default function Rsc() {
  console.log("??? 컴포넌트가 렌더링되었습니다.");
  return <div>저는 자식입니다.</div>;
}
