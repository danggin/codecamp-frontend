import "@testing-library/jest-dom";
import JestUnitTestSnapshotPage from "@/app/section35/35-03-jest-unit-test-snapahot/page";
import { render } from "@testing-library/react";

it("기존 스냅샷이랑 바뀐게 없는지 비교 - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestSnapshotPage />);

  expect(result.container).toMatchSnapshot();
});
