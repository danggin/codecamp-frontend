"use client";

import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { useAccessTokenStore } from "../stores/22-01-access-token-store";

interface IApolloUploadSetting {
  children: React.ReactNode;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloHeaderSetting(props: IApolloUploadSetting) {
  const { accessToken } = useAccessTokenStore();

  const uploadLink = createUploadLink({
    uri: "http://main-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // cache: new InMemoryCache(), // => accessToken이 변경되어서 리렌더될 때 새로 만들어짐
    cache: GLOBAL_STATE, // => 컴포넌트는 새로 만들어져도 globalState는 유지됨
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}