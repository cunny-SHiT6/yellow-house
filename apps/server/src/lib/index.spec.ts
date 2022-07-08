import { describe, it, expect } from "vitest";
import { audit } from ".";
import fs from "fs";

describe("Audits", () => {
  it("This website does not have colors", () => {
    expect(audit("", "").violations.length).toBeGreaterThanOrEqual(2);
  });

  it("ไม่มีอะไรเลย", () => {
    expect(audit("", "").score).toBe(0);
  });

  it("ชังชาติหนึ่งครั้ง หัก 5 คะแนน", () => {
    expect(audit("สลิ่ม", "").score).toBe(-5);
    expect(audit("เสมอภาค เสรีภาพสื่อ", "").score).toBe(-15);
  });

  it("test", () => {
    const w = fs.readFileSync("./src/lib/sample.html", "utf8");
    const res = audit(w, "");
    console.log(res);
  });

  it("คณะราษฎร", () => {
    expect(
      audit('<img src="..." alt="รูปของคณะราษฎร">', "").score
    ).toBeLessThanOrEqual(-2475);
  });
});
