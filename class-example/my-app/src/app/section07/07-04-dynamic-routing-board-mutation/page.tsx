"use client";

import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/navigation";
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

export default function StaticRoutingPage() {
  const router = useRouter();

  const [addPost] = useMutation(graphqlSetting);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {
    // try에 있는 내용을 시도하다가 실패하면 그 아래 코드는 무시하고 catch로 넘어감
    try {
      const result = await addPost({
        variables: {
          writerState: writer,
          titleState: title,
          contentsState: contents,
        },
      });

      alert("게시글 등록에 성공하였습니다.");

      router.push(
        `/section07/07-04-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error);
    } finally {
      // 성공이든 실패든 이 아래는 무조건 보여줘
    }
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
