"use client";

import BoardsWrite from "@/components/09-07-boards-write-validation-hooks-refactoring-typescript";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

export const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
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
    variables: { number: Number(params.number) },
  });
  console.log(data);

  return <BoardsWrite isEdit={true} data={data} />;
}
