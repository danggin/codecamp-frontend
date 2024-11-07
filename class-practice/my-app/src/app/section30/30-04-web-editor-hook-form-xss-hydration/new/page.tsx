"use client";

import "react-quill/dist/quill.snow.css";
// import ReactQuill from "react-quill";
// import { Modal } from "antd";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const CREATE_BOARD = gql`
  mutation createBoardWithImage($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorPage() {
  const [addPost] = useMutation(CREATE_BOARD);
  const router = useRouter();

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // react-quill 만든 사람들이 만들어 놓은 onChange => event 안들어옴
  const onChangeContent = (value) => {
    setValue("contents", value);
    trigger("contents");
  };

  const onSubmit = async (data) => {
    console.log(data);

    const result = await addPost({
      variables: {
        createBoardInput: {
          ...data,
          // writer: data.writer,
          // title: data.title,
          // contents: data.contents,
          // password: data.password,
        },
      },
    });

    const { Modal } = await import("antd"); // code-spliting
    Modal.success({ content: "게시글 등록에 성공하였습니다." });

    const boardId = result.data.createBoard._id;

    router.push(
      `/section30/30-04-web-editor-hook-form-xss-hydration/${boardId}`
    );
  };

  // 백그라운드에서 몰래 받기도 가능
  // useEffect(() => {
  //   const { Modal } = await import("antd");
  // })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용:
      <ReactQuill onChange={onChangeContent} />
      <button>등록하기</button>
    </form>
  );
}
