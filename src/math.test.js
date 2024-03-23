import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0);

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
  const inputs = ["str", 1, 2];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if array of numeric string values is provided", () => {
  const numbers = ["1", "2", "3"];
  const expectedResult = numbers.reduce((acc, curr) => +acc + +curr, 0);

  const result = add(numbers);

  expect(result).toBe(expectedResult);
});

it("should yield 0 if empty array is passed", () => {
  const numbers = [];
  const expectedResult = 0;

  const result = add(numbers);

  expect(result).toBe(expectedResult);
});

it("should throw an error no value is passed", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
