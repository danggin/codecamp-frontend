"use client";

import { useCheckLogin } from "@/commons/hooks/useCheckLogin";

export default function CustomHookPage() {
  const { checkLogin } = useCheckLogin();

  const onClickSubmit = () => {
    // 1. 로그인 체크
    checkLogin();

    // 2. 결제하기
  };

  return <button onClick={onClickSubmit}>결제하기</button>;
}
