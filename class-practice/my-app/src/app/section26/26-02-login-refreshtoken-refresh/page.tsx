"use client";

import { useAccessTokenStore } from "@/commons/stores/22-03-access-token-store-typescript";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample() {
    loginUserExample {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUserExample] = useMutation(LOGIN_USER_EXAMPLE);

  const { setAccessToken } = useAccessTokenStore();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onClickLogin = async () => {
    try {
      // 1. 로그인 뮤테이션 날려서 accessToken 받아오기
      const result = await loginUserExample({
        variables: { email: "aaaa4444@a.com", password: "1234" },
      });
      const accessToken = result.data?.loginUserExample.accessToken;
      console.log(accessToken);

      // 2. 받아온 accessToken을 globalState에 저장하기
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다! 다시 시도해 주세요!");
        return;
      }
      setAccessToken(accessToken);

      // 3. 로그인 성공 페이지로 이동하기
      router.push("/section26/26-02-login-refreshtoken-refresh-success");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
