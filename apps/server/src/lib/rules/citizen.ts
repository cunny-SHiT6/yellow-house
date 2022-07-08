import { Severity } from "../types";

export default {
  title: "เว็บไซต์ของคุณควรมีรูปที่เป็นภัยต่อความมั่นคงอย่างร้ายแรง",
  description: "คุณยังเป็นคนไทยอยู่หรือใหม่ เหตุใดจึงจ้องจะล้มล้างการปกครอง",
  severity: Severity.ชังชาติร้ายแรง,
  weight: 2475,
  check: (html: string, css: string) => {
    return /alt="(.*)คณะราษฎร(.*)"/.test(html) ? 1 : 0;
  },
};
