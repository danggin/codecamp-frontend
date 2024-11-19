"use client";

import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

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

export default function ModalRefactoringWithParallelRoutingPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
      <br />
      <Link href="/section33/33-04-modal2-refactoring-with-parallel-routing-new">
        글쓰기
      </Link>
    </>
  );
}
