import { caesarCipher } from "../code/caesarCipher";

test("caesar cipher test 1", () => {
  expect(caesarCipher("greetings good sir!", 0)).toBe("greetings good sir!");
});

test("caesar cipher test 2", () => {
  expect(caesarCipher("what a wonderful day", 3)).toBe("zkdw d zrqghuixo gdb");
});

test("caesar cipher test 3", () => {
  expect(caesarCipher("i really need to sleep early tonight!", 6)).toBe(
    "o xkgrre tkkj zu yrkkv kgxre zutomnz!"
  );
});

test("caesar cipher test 4", () => {
  expect(caesarCipher("going to work", 11)).toBe("rztyr ez hzcv");
});
