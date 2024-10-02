"use client";

import { useRouter } from "next/navigation";

export const useCheckLogin = () => {
  const router = useRouter();

  const checkLogin = () => {
    // 로그인 체크

    // 실패 시
    alert("아직 로그인을 하지 않으셨네요!");
    router.replace("/section08/08-05-custom-hook-login");
  };

  return {
    checkLogin,
  };
};
