"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard2 {
    fetchBoard(number: 2) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage1() {
  const { data } = useQuery(FETCH_BOARD);

  return (
    <>
      <div>2번 상세 페이지 이동이 완료되었습니다.</div>
      <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목: {data && data.fetchBoard.title}</div>
      <div>내용: {data && data.fetchBoard.contents}</div>
    </>
  );
}
