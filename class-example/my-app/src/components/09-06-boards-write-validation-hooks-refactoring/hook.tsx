"use client";

import { useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./queries";

export default function useBoardsWrite(props: any) {
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
      `/section09/09-06-validation-hooks-refactoring/${result.data.createBoard.number}`
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
    });

    alert("수정이 완료되었습니다!");
    router.push(
      `/section09/09-06-validation-hooks-refactoring/${result.data.updateBoard.number}`
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

  return {
    onChangeWriter,
    onChangeTitle,
    onChangeContents,
    onClickSubmit,
    onClickUpdate,
  };
}
