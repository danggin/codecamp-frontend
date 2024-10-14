"use client";

import { IListProps } from "./types";

export default function List({ data }: IListProps) {
  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </>
  );
}
