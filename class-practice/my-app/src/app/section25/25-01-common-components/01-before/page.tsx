"use client";

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const graphqlSetting = gql`
  mutation createBoard4(
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
  const router = useRouter();
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

    router.push("/section14/14-01-pagination");
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
