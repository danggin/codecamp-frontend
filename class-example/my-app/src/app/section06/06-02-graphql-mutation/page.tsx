"use client";

import { gql, useMutation } from "@apollo/client";

const graphqlSetting = gql`
  mutation {
    createBoard(writer: "불안이", title: "ㄷㄷㄷ", contents: "불안불안") {
      message
      number
      _id
    }
  }
`;

export default function GraphqlMutationPage() {
  const [addPost] = useMutation(graphqlSetting);

  const onClickSubmit = async () => {
    const result = await addPost();
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
