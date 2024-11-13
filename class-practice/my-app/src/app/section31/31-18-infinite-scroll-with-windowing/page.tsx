"use client";

import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { FetchBoardsDocument } from "@/commons/graphql/graphql";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { FixedSizeList as List } from "react-window";

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
    <div style={{ overflowY: "scroll" }}>
      <InfiniteScroll
        scrollableTarget="scroll"
        dataLength={data?.fetchBoards.length ?? 0}
        next={onNext}
        hasMore={true}
        loader={<></>}
      >
        <List
          width={"100%"}
          height={300}
          itemSize={50}
          itemCount={data?.fetchBoards.length}
          itemData={data?.fetchBoards}
          outerElementType={tag}
        >
          {({ index, style, data }) => (
            <div style={style}>
              <span style={{ margin: "10px" }}>{data[index].title}</span>
              <span style={{ margin: "10px" }}>{data[index].writer}</span>
            </div>
          )}
        </List>
        {/* {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        ))} */}
      </InfiniteScroll>
      <Link href="/section31/31-18-infinite-scroll-with-windowing-moved"></Link>
    </div>
  );
}

const tag = (props) => <div id="scroll" {...props} />;
