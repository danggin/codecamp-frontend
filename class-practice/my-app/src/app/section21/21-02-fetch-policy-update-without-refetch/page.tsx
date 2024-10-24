"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const UPDATE_BOARD = gql`
  mutation {
    updateBoard(
      boardId: "6719bcdd5413b3002914df99"
      password: "1234"
      updateBoardInput: { title: "제목 수정됨", contents: "내용 수정됨" }
    ) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function FetchPolicyUpdate() {
  const { data } = useQuery(FETCH_BOARDS);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickUpdate = () => {
    updateBoard();
  };

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
      <button onClick={onClickUpdate}>수정할래요</button>
    </>
  );
}
