import "@testing-library/jest-dom";
import fetch from "cross-fetch";
import JestUnitTestMockingPage from "@/app/section35/35-05-jest-unit-test-mocking/page";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

it("게시글 잘 등록되는지 테스트", async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://mock.com/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  render(
    <ApolloProvider client={client}>
      <JestUnitTestMockingPage />
    </ApolloProvider>
  );

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "맹구" },
  });
  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "하이욤" },
  });
  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "반갑습니다?" },
  });

  fireEvent.click(screen.getByRole("button-submit"));

  await waitFor(() => {
    const router = useRouter();
    expect(router.push).toHaveBeenCalled();
    // 위에서 가짜를 만들었으므로 실제 이동되지 않음 (실행됐는지만 확인!)
  });
});
