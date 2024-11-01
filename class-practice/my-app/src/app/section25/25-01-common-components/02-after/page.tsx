"use client";

import { gql, useMutation } from "@apollo/client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUpdateType, schema } from "./schema";
import Input from "@/commons/ui/25-01-input";
import Button from "@/commons/ui/25-01-button";

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
  const methods = useForm<IUpdateType>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: IUpdateType) => {
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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onClickSubmit)}>
        {/* 작성자: <input id="writer" type="text" {...register("writer")} />
      <br />
      {formState.errors.writer && (
        <p style={{ color: "red" }}>{formState.errors.writer?.message}</p>
      )} */}
        제목: <Input type="text" keyname="title" />
        <br />
        {methods.formState.errors.title && (
          <p style={{ color: "red" }}>
            {methods.formState.errors.title?.message}
          </p>
        )}
        내용: <Input type="text" keyname="contents" />
        <br />
        {methods.formState.errors.contents && (
          <p style={{ color: "red" }}>
            {methods.formState.errors.contents?.message}
          </p>
        )}
        {/* 주소:{" "}
      <input
        id="contents"
        type="text"
        {...register("boardAddress.addressDetail")}
      /> */}
        <Button>요청하기</Button>
        {/* <button disabled={!formState.isValid}>GRAPHQL-API 요청하기</button> */}
      </form>
    </FormProvider>
  );
}

/*
<form>
  <button type="button"></button> // 내가 onClick 추가하고 싶을 떄
  <button type="reset"></button> // form 안에 있는 input들 초기화하고 싶을 때
  <button type="submit"></button> // form 등록/수정하고 싶을 때 => default 값
</form>
*/
