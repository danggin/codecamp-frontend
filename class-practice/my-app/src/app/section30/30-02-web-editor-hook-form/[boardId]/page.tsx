"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function BoardDetailPage() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: params.boardId },
  });

  return (
    <>
      <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data ? data.fetchBoard.contents : ""}</div> */}

      {/* 내용에 들어있는 태그를 문열이 아닌 진짜 태그로 인식하기 */}
      <div
        dangerouslySetInnerHTML={{
          __html: data?.fetchBoard?.contents,
        }}
      ></div>
    </>
  );
}
