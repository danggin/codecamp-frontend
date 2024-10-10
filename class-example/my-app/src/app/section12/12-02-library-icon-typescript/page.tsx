"use client";

import { MouseEvent } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";

export default function LibraryIconPage() {
  // 1. 대부분의 아이콘 라이브러리들은 span 태그를 부모로 하려 내부에 icon image가 자식으로 들어감
  // 2. 이미지 클릭 시 부모로 onClick 이벤트가 전파됨
  const onClickDelete = (event: MouseEvent<HTMLSpanElement>) => {
    // alert(`${event.target.id}를 정말로 삭제합니까?`);
    // 이벤트 버블링이 발생하여 클릭되어지는 부분과 onClick이 적용된 부분이 다르게 되므로 target의 id를 읽어오지 못함
    alert(`${event.currentTarget.id}를 정말로 삭제합니까?`);
  };
  return (
    <div>
      <CloseCircleOutlined id="deleteID" onClick={onClickDelete} />
    </div>
  );
}
