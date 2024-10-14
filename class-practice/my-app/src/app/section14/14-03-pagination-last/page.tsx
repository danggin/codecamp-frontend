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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event) => {
    refetch({ mypage: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;

    setStartPage(startPage - 10);
    refetch({ mypage: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      refetch({ mypage: startPage + 10 });
    } else {
      alert("마지막 페이지 입니다.");
    }
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
        <span onClick={onClickPrevPage}>{`<`}</span>
        {/* {["짱구", "철수", 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => ( */}
        {new Array(10).fill("짱구").map(
          (_, index) =>
            index + startPage <= lastPage && (
              <span
                key={index + startPage}
                id={String(index + startPage)}
                onClick={onClickPage}
                style={{ margin: "0 5px" }}
              >
                {index + startPage}
              </span>
            )
        )}
        <span onClick={onClickNextPage}>{`>`}</span>
      </div>
    </>
  );
}
