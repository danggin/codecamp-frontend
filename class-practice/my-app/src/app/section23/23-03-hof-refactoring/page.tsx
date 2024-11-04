"use client";

import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards4($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  console.log(data);

  // refactoring 전
  //   const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
  //     refetch({ mypage: Number(event.currentTarget.id) });
  //   };

  // 고차함수를 이용한 refactoring
  const onClickPage = (page: number) => () => {
    refetch({ page });
  };

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}

      <div>
        {/* {["짱구", "철수", 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => ( */}
        {new Array(10).fill("짱구").map((_, index) => (
          <span key={index + 1} onClick={onClickPage(index + 1)}>
            {" "}
            {index + 1}{" "}
          </span>
        ))}
      </div>
    </>
  );
}
