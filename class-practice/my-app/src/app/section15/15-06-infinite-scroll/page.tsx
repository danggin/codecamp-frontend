"use client";

import { FetchBoardsDocument } from "@/commons/graphql/graphql";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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

export default function InfiniteScrollPage() {
  const { data, fetchMore } = useQuery(FetchBoardsDocument);
  const [hasMore, setHasMore] = useState(true);

  const onNext = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        mypage: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards.length) {
          setHasMore(false);
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div id="scroll" style={{ height: "250px", overflowY: "scroll" }}>
      <InfiniteScroll
        scrollableTarget="scroll"
        dataLength={data?.fetchBoards.length ?? 0}
        next={onNext}
        hasMore={true}
        loader={<div>로딩중입니다...</div>}
      >
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
