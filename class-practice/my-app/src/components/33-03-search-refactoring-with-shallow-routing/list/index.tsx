"use client";

import { gql, useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";

// GraphQL 쿼리: 게시글을 검색어와 페이지 번호에 따라 가져옵니다.
const FETCH_BOARDS = gql`
  query fetchBoardWithSearches($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function List() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const page = searchParams.get("page") ?? 1;

  const { data } = useQuery(FETCH_BOARDS, {
    variables: {
      search,
      page: Number(page),
    },
  });

  console.log("목록이 리렌더되었습니다.");

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </>
  );
}
