"use client";

import { useAccessTokenStore } from "@/commons/stores/22-01-access-token-store";
import { gql, useMutation } from "@apollo/client";
import local from "next/font/local";
import { useRouter } from "next/navigation";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useAccessTokenStore();

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email: "jjh@abc.com",
        password: "12345",
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);

    if (accessToken === "undefined") {
      alert("로그인에 실패했습니다. 다시 시도해 주세요.");
    }

    setAccessToken(accessToken);

    // 로컬 스토리지에도 저장
    localStorage.setItem("accessToken", accessToken);

    router.push("/section22/22-01-login-success");
  };

  return (
    <div>
      이메일: <input type="text" />
      비밀번호: <input type="password" />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}
