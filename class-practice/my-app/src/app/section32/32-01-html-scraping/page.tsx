"use client";

export default function HtmlScrapingPage() {
  const onClickScraping = async () => {
    const result = await fetch(
      "http://localhost:3000/section14/14-01-pagination"
    );
    const data = await result.text();
    console.log(data);
  };

  return <button onClick={onClickScraping}>긁어오기</button>;
}
