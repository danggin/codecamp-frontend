"use client";

import { checkValidationFile } from "@/commons/libraries/18-03-validation-file";
import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageURL, setImageURL] = useState("");
  const fileRef = useRef();
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event) => {
    const file = event.target.files[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능
    const isValid = checkValidationFile(file);

    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });

    setImageURL(result.data.uploadFile.url);
  };

  const onClickImage = () => {
    fileRef.current.click();
  };

  return (
    <>
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
    </>
  );
}
