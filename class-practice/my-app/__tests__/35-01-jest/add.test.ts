import { add } from "@/app/section35/35-01-jest/add";

it("testing add", () => {
  const result = add(3, 5);
  expect(result).toBe(8);
});

// describe("test group", () => {
//   it("testing add", () => {
//     const result = add(3, 5);
//     expect(result).toBe(8);
//   });
// });
