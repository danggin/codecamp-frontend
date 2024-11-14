"use client";

export default function OpengraphRequesterPage() {
  const onClickScraping = async () => {
    // 1. 채팅문자열에 주소가 있는지 찾기 (ex. http~로 시작하는 것)
    // 2. 해당 주소로 스크래핑하기
    const travelproductId = "6734190e9712e0002973f3c5";
    const res = await fetch(
      `http://localhost:3000/section32/32-04-ssr-dynamic-opengraph-provider/${travelproductId}`
    );
    const data = await res.text();
    // console.log(data);

    // 3. meta 태그에서 오픈그래프(og:) 찾기
    const result = data
      .split("meta")
      .filter((el) => el.includes('property="og:'));
    console.log(result);
  };

  return <button onClick={onClickScraping}>채팅 입력 후 전송</button>;
}
