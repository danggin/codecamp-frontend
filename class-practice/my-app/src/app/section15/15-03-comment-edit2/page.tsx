"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($mypage: Int) {
    fetchBoards(page: $mypage) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function CommentEditPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickEdit = (event) => {
    const array = [...myIndex];
    array[Number(event.currentTarget.id)] = true;
    setMyIndex(array);
  };

  return (
    <>
      {data?.fetchBoards.map((el: any, index: number) =>
        myIndex[index] ? (
          <div key={el._id}>
            <input type="text" />
            <button>수정하기</button>
          </div>
        ) : (
          <div key={el._id}>
            <span style={{ marginRight: "10px" }}>{el.writer}</span>
            <span style={{ marginRight: "10px" }}>{el.title}</span>
            <button id={String(index)} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        )
      )}
    </>
  );
}
