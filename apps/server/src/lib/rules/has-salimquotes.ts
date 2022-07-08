import { Severity } from "../types";
import quotes from "../../../database/salimquotes.json";

export default {
  title: "เว็บไซต์ของคุณควรต้องด่าฝั่งตรงข้าม",
  description: "หรือว่าคุณไม่เกลียดฝั่งตรงข้าม??",
  severity: Severity.Fail,
  weight: 10,
  check: (html: string, css: string) => {
    return quotes.quotes.some((p) => html.includes(p.body)) ? 1 : 0;
  },
};
