"use client";

export default function MapElPage() {
  // 1. 기본 방법
  ["딸기", "바나나", "오렌지"].forEach((el, index) => {
    console.log("el:", el);
    console.log("index:", index);
    console.log("============");
  });

  // 2. 매개변수 변경 방법
  ["딸기", "바나나", "오렌지"].forEach((item, order) => {
    console.log("el:", item);
    console.log("index:", order);
    console.log("============");
  });

  // 3. 함수선언식 방법
  ["딸기", "바나나", "오렌지"].forEach(function (item, order) {
    console.log("el:", item);
    console.log("index:", order);
    console.log("============");
  });

  // 4. el과 index 바꾸기
  ["딸기", "바나나", "오렌지"].forEach((index, el) => {
    console.log("el:", el);
    console.log("index:", index);
    console.log("============");
  });

  return <></>;
}
