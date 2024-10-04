"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function BoardsDetailPage() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(params.number) },
  });
  console.log(data);

  return (
    <>
      <div>{params.number}번 게시글 이동이 완료되었습니다.</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
      <Link
        href={`/section09/09-06-validation-hooks-refactoring/${params.number}/edit`}
      >
        수정하러 가기
      </Link>
    </>
  );
}