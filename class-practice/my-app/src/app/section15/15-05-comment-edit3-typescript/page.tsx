"use client";

import CommentItem from "@/components/15-05-comment-edit3-typescript";
import { FetchBoardsDocument } from "@/commons/graphql/graphql";
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

export default function CommentEditPage() {
  const { data } = useQuery(FetchBoardsDocument);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <CommentItem key={el._id} el={el} />
      ))}
    </div>
  );
}
