import { Severity } from "../types";

export default {
  title: "เว็บไซต์ของคุณควรมีสีฟ้า",
  description: "สีฟ้าเป็นสีของแม่หลวงของเรา",
  severity: Severity.Fail,
  weight: 10,
  check: (html: string, css: string) => {
    return css.includes("blue") ? 1 : 0;
  },
};
