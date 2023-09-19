import { reverseString } from "../code/reverseString";

test("Reverse string test 1", () => {
  expect(reverseString("Hi There")).toBe("erehT iH");
});

test("Reverse string test 2", () => {
  expect(reverseString("test")).toBe("tset");
});

test("Reverse string test 3", () => {
  expect(reverseString(55)).toBe("");
});

test("Reverse string test 4", () => {
  expect(reverseString("X")).toBe("X");
});

test("Reverse string test 5", () => {
  expect(reverseString(null)).toBe("");
});
