import { expect, it, describe } from "vitest";
import { transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("should transform a string number to number type number", () => {
    const num = "123";
    const expRes = 123;

    const result = transformToNumber(num);

    expect(result).toBeTypeOf("number");
    expect(result).toBe(expRes);
  });

  it("should yield NaN for non-transformable values", () => {
    const num = "invalid";

    const result = transformToNumber(num);

    expect(result).toBeNaN();
  });
});

describe("Just to see how it'd look", () => {
  it("should yield NaN for non-transformable values", () => {
    const num = "invalid";

    const result = transformToNumber(num);

    expect(result).toBeNaN();
  });
});
