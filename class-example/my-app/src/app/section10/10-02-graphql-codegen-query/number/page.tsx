"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($myNumber: Int) {
    fetchBoard(number: $myNumber) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  // 구버전 방식
  // const router = useRouter()
  // router.push("/")
  // router.query.id

  // 신버전 방식
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { myNumber: Number(params.number) },
  });

  console.log(data);

  return (
    <>
      <div>{params.number}번 상세 페이지 이동이 완료되었습니다.</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </>
  );
}
