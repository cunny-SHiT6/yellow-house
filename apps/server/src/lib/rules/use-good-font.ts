import { Severity } from "../types";

export default {
  title: "เว็บไซต์กำลังใช้ฟอนต์ชังชาติ",
  description: "คุณไม่ควรสนับสนุนพวกชังชาติ ด้วยการใช้ฟอนต์ของพวกเขา",
  severity: Severity.ชังชาติร้ายแรง,
  weight: 1112,
  check: (html: string, css: string) => {
    return css.toLowerCase().includes("anakotmai") ? 1 : 0;
  },
};
