"use client";

import Link from "next/link";
import { gql, useApolloClient, useQuery } from "@apollo/client";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoardsWithoutContents($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function DataPrefetchPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const client = useApolloClient();

  const prefetchBoardDebounce = _.debounce((boardId) => {
    client.query({
      query: FETCH_BOARD,
      variables: { boardId },
    });
  }, 200);

  const prefetchBoard = (boardId) => () => {
    prefetchBoardDebounce(boardId);
  };

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <Link
          href={`/section31/31-14-data-prefetch-moved/${el._id}`}
          key={el._id}
        >
          <div onMouseOver={prefetchBoard(el._id)}>
            <span style={{ marginRight: "10px" }}>{el.writer}</span>
            <span>{el.title}</span>
          </div>
        </Link>
      ))}
    </>
  );
}
