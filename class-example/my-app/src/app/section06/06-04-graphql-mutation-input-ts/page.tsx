"use client";

import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const graphqlSetting = gql`
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

export default function GraphqlMutationPage() {
  const [addPost] = useMutation(graphqlSetting);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

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
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
