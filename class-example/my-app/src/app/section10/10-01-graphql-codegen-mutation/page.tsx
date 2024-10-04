"use client";

import { gql, useMutation } from "@apollo/client";

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

  const onClickSubmit = async () => {
    const result = await addPost({
      variables: {
        // variables가 '$' 역할을 함
        writerState: "스틸가",
        titleState: "헤이",
        contentsState: "리산알가입",
      },
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
