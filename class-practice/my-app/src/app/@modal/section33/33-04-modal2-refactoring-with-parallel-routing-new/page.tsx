"use client";

import { Modal } from "antd";

export default function ModalRefactoringWithParallelRoutingNewPage() {
  return (
    <>
      <Modal title="글쓰기" open={true}>
        제목: <input type="text" />
        <br />
        내용: <input type="text" />
        <br />
        <button>등록</button>
      </Modal>
    </>
  );
}
