"use client";

import { gql, useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface iBoardWriteProps {
  isEdit: boolean;
}
const CREATE_BOARD = gql`
  mutation createBoard(
    $writerState: String
    $titleState: String
    $contentsState: String
  ) {
    # 타입 적는 곳
    createBoard(
      writer: $writerState
      title: $titleState
      contents: $contentsState
    ) {
      # 실제 전달할 변수 적는 곳
      message
      number
      _id
    }
  }
`;

const UPDATE_BOARD = gql`
  mutation updateBoard(
    $mynumber: Int
    $writerState: String
    $titleState: String
    $contentsState: String
  ) {
    updateBoard(
      number: $mynumber
      writer: $writerState
      title: $titleState
      contents: $contentsState
    ) {
      _id
      number
      message
    }
  }
`;

export default function BoardsWrite(props: iBoardWriteProps) {
  const [addPost] = useMutation(CREATE_BOARD);
  const [updatePost] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const router = useRouter();
  const params = useParams();

  const onClickSubmit = async () => {
    const result = await addPost({
      variables: {
        // variables가 '$' 역할을 함
        writerState: writer,
        titleState: title,
        contentsState: contents,
      },
    });
    console.log(result);
    alert("등록이 완료되었습니다!");
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const result = await updatePost({
      variables: {
        mynumber: Number(params.number),
        writerState: writer,
        titleState: title,
        contentsState: contents,
      },
    });
    console.log(result);
    alert("수정이 완료되었습니다!");
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <>
      <h1>{props.isEdit ? "수정" : "등록"} 페이지</h1>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>
        {props.isEdit ? "수정" : "등록"}하기
      </button>
    </>
  );
}
