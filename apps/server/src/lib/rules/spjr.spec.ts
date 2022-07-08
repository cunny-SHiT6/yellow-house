import { describe, it, expect } from "vitest";

import SPJR from "./spjr";

describe("Test SPJR", () => {
  it("Test SPJR", () => {
    expect(SPJR.check('<alt="bruh">', "")).toBe(0);
    expect(
      SPJR.check('<img src="..." alt="ขอพระองค์ทรงพระเจริญยิ่งยืนนาน" />', "")
    ).toBe(1);
  });
});
