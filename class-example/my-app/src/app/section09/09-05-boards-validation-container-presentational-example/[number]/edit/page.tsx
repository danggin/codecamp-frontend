"use client";

import { FETCH_BOARD } from "@/components/09-05-boards-validation-container-presentational-example-write/board-write-queries";
import BoardsWrite from "@/components/09-05-boards-validation-container-presentational-example-write/boards-write-container";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

export default function BoardEditPage() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(params.number) },
  });

  return <BoardsWrite isEdit={true} data={data} />;
}
