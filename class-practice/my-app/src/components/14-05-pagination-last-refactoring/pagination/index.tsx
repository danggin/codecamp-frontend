"use client";

import { usePagination } from "./hook";

export default function Pagination({ lastPage, refetch }) {
  const { onClickPage, onClickPrevPage, onClickNextPage, startPage } =
    usePagination({
      lastPage,
      refetch,
    });

  return (
    <>
      <span onClick={onClickPrevPage}>{`<`}</span>
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
    </>
  );
}
