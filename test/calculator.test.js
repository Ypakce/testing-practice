import { calculator } from "../code/calculator";

test("calculator test 1", () => {
  expect(calculator.add(5, 8)).toBe(13);
});

test("calculator test 2", () => {
  expect(calculator.sub(10, 8)).toBe(2);
});

test("calculator test 3", () => {
  expect(calculator.mul(5, 2)).toBe(10);
});

test("calculator test 4", () => {
  expect(calculator.div(25, 5)).toBe(5);
});
