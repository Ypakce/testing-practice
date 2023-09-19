import { capitalize } from "../code/capitalize";

test("capitalize test 1", () => {
  expect(capitalize("hi")).toBe("Hi");
});

test("capitalize test 2", () => {
  expect(capitalize(null)).toBe("");
});

test("capitalize test 3", () => {
  expect(capitalize("capitalize")).toBe("Capitalize");
});

test("capitalize test 4", () => {
  expect(capitalize(54)).toBe("");
});

test("capitalize test 5", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
