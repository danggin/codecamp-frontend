"use client";

import { UploadFileDocument } from "@/commons/graphql/graphql";
import { checkValidationFile } from "@/commons/libraries/18-03-validation-file";
import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoardWithImage($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UploadFileDocument);
  const [addPost] = useMutation(CREATE_BOARD);

  const [imageURL, setImageURL] = useState("");
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickSubmit = async () => {
    const result = await addPost({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents,
          password: "1234",
          images: [imageURL],
        },
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) =>
    setWriter(event.target.value);
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) =>
    setContents(event.target.value);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능
    const isValid = checkValidationFile(file);

    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });

    setImageURL(result.data?.uploadFile.url ?? "");
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <div
        style={{ width: "120px", height: "50px", backgroundColor: "skyblue" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <input
        type="file"
        onChange={onChangeFile}
        multiple
        style={{ display: "none" }}
        ref={fileRef}
        accept="image/jpeg,image/pnh" // 1. jpg/jpeg 모두 가능, 2. 띄어쓰기 없이 ','로 구분하기
      />
      <img src={`https://storage.googleapis.com/${imageURL}`} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
