"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getAccessToken } from "../libraries/26-01-get-access-token";
import { useLoadStore } from "../stores/26-02-load-store";
import { useAccessTokenStore } from "../stores/22-03-access-token-store-typescript";

export const withLoginCheck =
  (component: () => JSX.Element) =>
  <P extends object>(props: P) => {
    const router = useRouter();
    const { isLoaded } = useLoadStore();
    const { accessToken } = useAccessTokenStore();

    useEffect(() => {
      if (!isLoaded) return;

      if (!accessToken) {
        alert("로그인 후 이용 가능합니다!!!");
        router.push("/section26/26-02-login-refreshtoken-refresh");
      }
    }, [isLoaded]);

    return <component {...props} />;
  };
