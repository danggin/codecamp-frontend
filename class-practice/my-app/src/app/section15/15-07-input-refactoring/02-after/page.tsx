"use client";

import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const graphqlSetting = gql`
  # //   mutation createBoard(
  # //     $writer: String
  # //     $title: String
  # //     $contents: String
  # //   ) {
  # //     # 타입 적는 곳
  # //     createBoard(
  # //       writer: $writer
  # //       title: $title
  # //       contents: $contents
  # //     ) {
  # //       # 실제 전달할 변수 적는 곳
  # //       message
  # //       number
  # //       _id
  # //     }
  # //   }
`;

export default function GraphqlMutationPage() {
  const [addPost] = useMutation(graphqlSetting);

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const onClickSubmit = async () => {
    const result = await addPost({
      variables: { ...inputs },
    });
  };

  const onChangeInputs = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <>
      작성자: <input id="writer" type="text" onChange={onChangeInputs} />
      <br />
      제목: <input id="title" type="text" onChange={onChangeInputs} />
      <br />
      내용: <input id="contents" type="text" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
