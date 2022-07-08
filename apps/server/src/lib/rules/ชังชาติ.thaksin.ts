import { Severity } from "../types";
import ชังชาติ from "../../../database/ชังชาติ.json";

export default {
  title: "เว็บไซต์ของคุณมีคำพูดชังชาติ",
  description: "คุณอยู่ผิดฝั่งหรือเปล่าว?",
  severity: Severity.ชังชาติร้ายแรง,
  weight: 5,
  check: (html: string, css: string) => {
    return ชังชาติ.ชังชาติ.reduce((prev, curr) => {
      if (html.includes(curr) ? 1 : 0) {
        console.log(curr);
      }
      return prev + (html.includes(curr) ? 1 : 0);
    }, 0);
  },
};
