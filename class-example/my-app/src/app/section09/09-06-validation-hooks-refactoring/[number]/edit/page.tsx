"use client";

import BoardsWrite from "@/components/09-06-boards-write-validation-hooks-refactoring";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

export const FETCH_BOARD = gql`
  query fetchBoard($myNumber: Int) {
    fetchBoard(number: $myNumber) {
      number
      writer
      title
      contents
    }
  }
`;

export default function BoardEditPage() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { myNumber: Number(params.number) },
  });
  console.log(data);

  return <BoardsWrite isEdit={true} data={data} />;
}
