"use client";

import { firebaseApp } from "@/commons/libraries/17-01-firebase";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

export default function FirebasePage() {
  const board = collection(getFirestore(firebaseApp), "board");

  const onClickSubmit = async () => {
    await addDoc(board, {
      writer: "철수",
      title: "ㅎㅇ",
      content: "ㅎㅇㅎㅇ",
    });
  };

  const onClickFetch = async () => {
    const result = await getDocs(board);
    console.log(result);

    const data = result.docs.map((el) => el.data());
    console.log(data);
  };

  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <br />
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
