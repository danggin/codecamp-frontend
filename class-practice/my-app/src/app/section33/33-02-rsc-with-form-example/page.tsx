"use client";

import onSubmit from "./actions";
import { useFormState } from "react-dom";

export default function RscWithFormExamplePage() {
  const [state, addPost] = useFormState(onSubmit);

  console.log(state);

  return (
    <form action={addPost}>
      제목: <input type="text" name="title" />
      <br />
      내용: <input type="text" name="contents" />
      <br />
      <button>등록</button>
    </form>
  );
}
