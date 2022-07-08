import { AuditRespond, Rule, Severity } from "./types";
import { rules } from "./rules";
import { load } from "cheerio";

export function audit(html: string, css: string): AuditRespond {
  let totalWeight = 0;
  let weightGet = 0;
  let negativePoi = 0;
  const violations: Rule[] = [];

  const $ = load(html);
  const body = $("body");

  if (!body) {
    throw new Error("No body found");
  }

  for (const rule of rules) {
    const run = rule.check(body.html(), $.html());

    if (rule.severity == Severity.Fail) {
      totalWeight += rule.weight;
      weightGet = run * rule.weight;

      if (run < 1) {
        violations.push(rule);
      }
    } else {
      negativePoi += run * rule.weight;

      if (run > 0) {
        violations.push({ ...rule, violated: run * rule.weight });
      }
    }
  }

  return {
    score: Math.floor((weightGet / totalWeight) * 100) - negativePoi,
    violations,
  };
}
