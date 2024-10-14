"use client";

import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./queries";
import List from "@/components/14-05-pagination-last-refactoring/list";
import Pagination from "@/components/14-05-pagination-last-refactoring/pagination";

export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  return (
    <>
      <List data={data} />
      <Pagination lastPage={lastPage} refetch={refetch} />
    </>
  );
}
