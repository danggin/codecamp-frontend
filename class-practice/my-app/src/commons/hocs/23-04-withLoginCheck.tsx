"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const withLoginCheck = (component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다!!!");
      router.push("/section23/23-04-login-localstorage-check-hoc-success");
    }
  }, []);

  return <component {...props} />;
};
