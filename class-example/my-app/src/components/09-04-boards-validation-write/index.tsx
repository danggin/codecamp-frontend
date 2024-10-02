"use client";

import { gql, useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { FETCH_BOARD } from "@/app/section09/09-04-boards-validation/[number]/edit/page";

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

export default function BoardsWrite(props: any) {
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
    router.push(
      `/section09/09-04-boards-validation/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    const myVariables = {
      mynumber: Number(params.number),
    };

    if (writer) myVariables.writerState = writer;
    if (title) myVariables.titleState = title;
    if (contents) myVariables.contentsState = contents;

    const result = await updatePost({
      variables: myVariables,
      refetchQueries: [{ query: FETCH_BOARD }],
    });

    alert("수정이 완료되었습니다!");
    router.push(
      `/section09/09-04-boards-validation/${result.data.updateBoard.number}`
    );
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
      작성자:{" "}
      <input
        type="text"
        onChange={onChangeWriter}
        defaultValue={props.data?.fetchBoard?.writer}
      />
      <br />
      제목:{" "}
      <input
        type="text"
        onChange={onChangeTitle}
        defaultValue={props.data?.fetchBoard?.title}
      />
      <br />
      내용:{" "}
      <input
        type="text"
        onChange={onChangeContents}
        defaultValue={props.data?.fetchBoard?.contents}
      />
      <br />
      <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>
        {props.isEdit ? "수정" : "등록"}하기
      </button>
    </>
  );
}
