import { Severity } from "../types";

export default {
  title: "เว็บไซต์ของคุณควรมีป็อปอัพแสดงความเคารพต่อพ่อหลวง",
  description:
    "ถึงแม้ว่าอาจจะทำให้ UX เสียหายบ้าง แต่มันก็ไม่สำคัญเท่าความมั่นคงในชาติ",
  severity: Severity.Fail,
  weight: 60,
  check: (html: string, css: string) => {
    return /alt="(.*)ทรงพระเจริญ(.*)"/.test(html) ? 1 : 0;
  },
};
