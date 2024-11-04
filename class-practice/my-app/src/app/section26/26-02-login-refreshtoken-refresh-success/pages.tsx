"use client";

import { FetchUserLoggedInDocument } from "@/commons/graphql/graphql";
import { withLoginCheck } from "@/commons/hocs/26-02-withLoginCheck";
import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  const router = useRouter();
  const client = useApolloClient();

  // 1. 페이지 접속하면 자동으로 data에 받아지고(data는 global state에 저장) 리렌더링 됨
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // 2. login 실행 시 data에 받아지고(data는 global state에 저장) 리렌더링 됨
  // const [login, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

  // 3. fetch처럼 사용하는 방법 (결과는 global state에 저장됨)
  // const client = useApolloClient();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다!!!");
      router.push("/section26/26-01-login-refreshtoken-refresh");
    }
  }, []);

  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return <button onClick={onClickButton}>클릭하세요</button>;
}

export default withLoginCheck(LoginSuccessPage);
