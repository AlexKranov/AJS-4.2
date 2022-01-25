import getHealth from "../health";

test.each([
  [{ name: "magician", health: 11 }, "critycal"],
  [{ name: "magician", health: 50 }, "wounded"],
  [{ name: "magician", health: 96 }, "healthy"],
])("%o", (status, expected) => {
  const result = getHealth(status);
  expect(result).toBe(expected);
});