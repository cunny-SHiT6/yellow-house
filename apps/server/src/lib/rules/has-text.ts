import { Severity } from "../types";
import president from "../../../database/presidents.json";

export default {
  title: "เว็บไซต์ของคุณควรมีการพูดถึงในหลวง",
  description: "หรือว่าคุณไม่รักชาติ??",
  severity: Severity.Fail,
  weight: 40,
  check: (html: string, css: string) => {
    return president.some((p) => html.includes(p)) ? 1 : 0;
  },
};
