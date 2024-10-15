"use client";

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
  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  const [hasMore, setHasMore] = useState(true);

  const onNext = () => {
    if (data === undefined) return;

    fetchMore({
      variables: { mypage: Math.ceil(data?.fetchBoards.length ?? 10 / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards.length) {
          setHasMore(false);
          return;
        }

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <>
      <InfiniteScroll
        next={onNext}
        hasMore={hasMore}
        loader={<div>로딩중입니다...</div>}
        dataLength={data?.fetchBoards.length ?? 0}
      >
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span style={{ marginRight: "10px" }}>{el.writer}</span>
            <span>{el.title}</span>
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
}
