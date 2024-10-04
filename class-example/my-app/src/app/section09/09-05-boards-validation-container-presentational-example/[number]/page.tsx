"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "@/components/09-05-boards-validation-container-presentational-example-write/board-write-queries";

export default function BoardsDetailPage() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(params.number) },
  });

  return (
    <>
      <div>{params.number}번 게시글 이동이 완료되었습니다.</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
      <Link
        href={`/section09/09-05-boards-validation-container-presentational-example/${params.number}/edit`}
      >
        수정하러 가기
      </Link>
    </>
  );
}
