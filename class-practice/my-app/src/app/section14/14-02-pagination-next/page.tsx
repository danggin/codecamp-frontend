"use client";

import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";

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
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event) => {
    refetch({ mypage: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    setStartPage(startPage - 10);
    refetch({ mypage: startPage - 10 });
  };

  const onClickNextPage = () => {
    setStartPage(startPage + 10);
    refetch({ mypage: startPage + 10 });
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
        <span onClick={onClickPrevPage}> {`<`} </span>
        {/* {["짱구", "철수", 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => ( */}
        {new Array(10).fill("짱구").map((_, index) => (
          <span
            key={index + startPage}
            id={String(index + startPage)}
            onClick={onClickPage}
          >
            {" "}
            {index + startPage}{" "}
          </span>
        ))}
        <span onClick={onClickNextPage}> {`>`} </span>
      </div>
    </>
  );
}
