"use client";

import "react-quill/dist/quill.snow.css";
// import ReactQuill from "react-quill";
// import { Modal } from "antd";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage() {
  // react-quill 만든 사람들이 만들어 놓은 onChange => event 안들어옴
  const onChangeContent = (value) => {
    console.log(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const { Modal } = await import("antd"); // code-spliting
    Modal.success({ content: "게시글 등록에 성공하였습니다." });
  };

  // 백그라운드에서 몰래 받기도 가능
  // useEffect(() => {
  //   const { Modal } = await import("antd");
  // })

  return (
    <form onSubmit={onSubmit}>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용:
      <ReactQuill onChange={onChangeContent} />
      <button>등록하기</button>
    </form>
  );
}
