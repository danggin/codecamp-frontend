export default async function RscWithCache() {
  console.log("요청이 완료되었습니다.");
  await fetch("https://koreanjson.com/posts/1");

  return <button>요청하기</button>;
}

// 모든 컴포넌트를 RCC로 하면 안좋은 이유
// 1. 불필요한 하이드레이션 발생 => console.log 브라우저에서 또 실행됨
// 2. 불필요한 하이드레이션을 위한 코드 다운로드로 인한 용량 증기

// 모든 컴포넌트를 RSC로 할 수 없는 이유
// onClick, onChange, useState, useEffect, useQuery 등은 브라우저에서만 가능하기 때문
