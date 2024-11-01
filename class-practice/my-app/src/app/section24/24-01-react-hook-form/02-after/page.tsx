"use client";

import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

// const graphqlSetting = gql`
//   mutation createBoard($writer: String, $title: String, $contents: String) {
//     # 타입 적는 곳
//     createBoard(writer: $writer, title: $title, contents: $contents) {
//       # 실제 전달할 변수 적는 곳
//       message
//       number
//       _id
//     }
//   }
// `;

export default function GraphqlMutationPage() {
  // const [addPost] = useMutation(graphqlSetting);
  const { register, handleSubmit } = useForm();

  const onClickSubmit = async (data) => {
    console.log(data);

    // const result = await addPost({
    //   variables: {
    //     writer: data.writer,
    //     title: data.title,
    //     contents: data.contents,
    //   },
    // });
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input id="writer" type="text" {...register("writer")} />
      <br />
      제목: <input id="title" type="text" {...register("title")} />
      <br />
      내용: <input id="contents" type="text" {...register("contents")} />
      <br />
      주소:{" "}
      <input
        id="contents"
        type="text"
        {...register("boardAddress.addressDetail")}
      />
      <br />
      <button>GRAPHQL-API 요청하기</button>
    </form>
  );
}

/*
<form>
  <button type="button"></button> // 내가 onClick 추가하고 싶을 떄
  <button type="reset"></button> // form 안에 있는 input들 초기화하고 싶을 때
  <button type="submit"></button> // form 등록/수정하고 싶을 때 => default 값
</form>
*/
