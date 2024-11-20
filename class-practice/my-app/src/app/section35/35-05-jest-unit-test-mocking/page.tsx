"use client";

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function JestUnitTestMockingPage() {
  const router = useRouter();
  const [addPost] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {
    try {
      const result = await addPost({
        variables: {
          createBoardInput: {
            writer,
            title,
            contents,
            password: "1234",
          },
        },
      });
      console.log(result);
      const boardId = result.data.createBoard._id;
      router.push(`/boards/${boardId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자:{" "}
      <input role="input-writer" type="text" onChange={onChangeWriter} />
      <br />
      제목: <input role="input-title" type="text" onChange={onChangeTitle} />
      <br />
      내용:{" "}
      <input role="input-contents" type="text" onChange={onChangeContents} />
      <br />
      <button role="button-submit" onClick={onClickSubmit}>
        GRAPHQL-API 요청하기
      </button>
    </>
  );
}
