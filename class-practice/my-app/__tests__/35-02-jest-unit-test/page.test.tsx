import JestUnitTestPage from "@/app/section35/35-02-jest-unit-test/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("내가 원하는대로 그려지는지 테스트하기", () => {
  render(<JestUnitTestPage />);

  const myText1 = screen.getByText("안녕하세요");
  expect(myText1).toBeInTheDocument();

  const myText2 = screen.getByText("취미 입력하기:");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("등록");
  expect(myText3).toBeInTheDocument();
});
