"use client";

import { FetchBoardsDocument } from "@/commons/graphql/graphql";
import Checkbox from "@/components/11-03-event-bubbling-stop-propagation-component";
import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function MapBoardsPage() {
  const { data } = useQuery(FetchBoardsDocument);

  const onclickLike = (event: MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();

    alert("좋아요가 +1 되었습니다.");
  };

  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <a href="https://www.naver.com" key={el.number}>
          <div id={el.writer}>
            <Checkbox />
            <span style={{ margin: "10px" }}>{el.number}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <span>{el.title} </span>
            <span onClick={onclickLike}>좋아요</span>
          </div>
        </a>
      ))}
    </>
  );
}
