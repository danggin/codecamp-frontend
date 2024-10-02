"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent } from "react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($myNumber: Int) {
    deleteBoard(number: $myNumber) {
      message
    }
  }
`;

export default function MapBoardsPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (event: ChangeEvent<HTMLButtonElement>) => {
    deleteBoard({
      variables: {
        myNumber: Number(event.target.id),
      },
      refetchQueries: [
        { query: FETCH_BOARDS },
        // {},
        // {}, ...
      ],
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el.number}>
          {/* 1. 특별한 이유가 없으면 fragment로 감싸자! <div></div>는 태그를 한개 더 그려야 함 */}
          {/* 2. fragment는? <></>, <Fragment></Fragment> */}
          {/* 3. fragment에 key를 입력하려면 요렇게 : <Fragment key={1}></Fragment> */}
          {/* 4. key에 index를 쓰면 게시글이 삭제될 때 다음 게시글이 올라오면서 유지되므로 유일하지 않음 */}
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </>
  );
}
