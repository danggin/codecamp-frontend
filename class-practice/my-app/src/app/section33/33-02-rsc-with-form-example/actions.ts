"use server"; // 강제로 서버에서 실행

import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "제목을 입력해 주세요"),
  name: z.string().min(1, "내용을 입력해 주세요"),
});

export default async function onSubmit(prevState, formData) {
  // Next 서버에서 실행되는 곳
  console.log(formData);

  const title = formData.get("title");
  const contents = formData.get("contents");
  console.log(title, contents);

  const result = schema.safeParse({
    title,
    contents,
  });

  if (result.success) {
    // 등록하기 로직
  } else {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
}
