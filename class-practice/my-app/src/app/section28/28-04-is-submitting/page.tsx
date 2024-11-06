"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function isSubmittingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onClickSubmit() {
    // react-hook-form 에 이미 만들어져 있음
    // const {formState} = useForm();
    // formState.isSubmitting

    setIsSubmitting(true);
    const result = await fetch("https://koreanjson.com/posts/1");
    const data = await result.json();

    console.log(data);

    setIsSubmitting(false);
  }

  return (
    <button
      onClick={onClickSubmit}
      disabled={isSubmitting}
      style={{ background: isSubmitting ? "gray" : "none" }}
    >
      게시글 등록하기
    </button>
  );
}
