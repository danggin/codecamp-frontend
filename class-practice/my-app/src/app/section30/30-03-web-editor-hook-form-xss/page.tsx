"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

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

export default function BoardListPage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <Link
          href={`/section30/30-03-web-editor-hook-form-xss/${el._id}`}
          key={el._id}
        >
          <div>
            <span style={{ marginRight: "10px" }}>{el.writer}</span>
            <span>{el.title}</span>
          </div>
        </Link>
      ))}
    </>
  );
}
