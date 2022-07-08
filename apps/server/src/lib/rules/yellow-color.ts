import { Severity } from "../types";

export default {
  title: "เว็บไซต์ของคุณควรมีสีเหลือง",
  description: "สีเหลืองเป็นสีของพ่อหลวงของเรา",
  severity: Severity.Fail,
  weight: 10,
  check: (html: string, css: string) => {
    return css.includes("yellow") ? 1 : 0;
  },
};
