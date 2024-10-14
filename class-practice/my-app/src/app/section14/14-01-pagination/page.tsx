"use client";

import { gql, useQuery } from "@apollo/client";
import { ChangeEvent } from "react";

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

export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onClickPage = (event) => {
    refetch({ mypage: Number(event.currentTarget.id) });
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
          <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
            {" "}
            {index + 1}{" "}
          </span>
        ))}
      </div>
    </>
  );
}
