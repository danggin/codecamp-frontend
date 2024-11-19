"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { Modal } from "antd";

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

export default function ModalWithoutParallelRouting() {
  const { data } = useQuery(FETCH_BOARDS);

  const [isOpen, setIsOpen] = useState(false);

  const onClickModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
      <br />
      <button onClick={onClickModalOpen}>글쓰기</button>

      <Modal title="글쓰기" open={isOpen}>
        제목: <input type="text" />
        <br />
        내용: <input type="text" />
        <br />
        <button>등록</button>
      </Modal>
    </>
  );
}
