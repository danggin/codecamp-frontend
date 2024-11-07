"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

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

      {/* 내용이 들어있는 태그 중에 <script> 태그처럼 공격 태그가 있을 수 있으니 막아서 보여주기 */}
      {typeof window !== "undefined" ? (
        <div
          dangerouslySetInnerHTML={{
            __html: data?.fetchBoard?.contents,
          }}
        ></div>
      ) : (
        <div></div>
      )}
    </>
  );
}
