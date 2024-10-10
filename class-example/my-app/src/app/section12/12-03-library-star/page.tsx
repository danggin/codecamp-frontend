"use client";

import { useState } from "react";
import { Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function LibraryStarPage() {
  const [value, setValue] = useState(1);

  // 1. 1단계 방식 => onChange는 Antd 개발자들이 만든 가짜 onChange임 (value 들어옴)
  //   const onChangeStar = (value) => {
  //     setValue(value);
  //   };

  //   return <Rate tooltips={desc} onChange={onChangeStar} value={value} />;

  // 2. 2단계 방식 => {}와 return 사이에  아무것도 없으면 소괄호로 변경 가능, 특별한 의미 없을때는 소괄호도 생략 가능하므로 더 간단한 코드가 될 수 있다
  //   const onChangeStar = (value) => setValue(value);

  // 3단계 방식
  // return <Rate tooltips={desc} onChange={(value) => setValue(value)} value={value} />

  // 4단계 방식
  return <Rate tooltips={desc} onChange={setValue} value={value} />;
}
