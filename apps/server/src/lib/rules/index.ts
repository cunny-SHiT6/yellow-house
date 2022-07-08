import { Rule } from "../types";

import BlueColor from "./blue-color";
import YellowColor from "./yellow-color";
import hasText from "./has-text";
import ชังชาติThaksin from "./ชังชาติ.thaksin";
import useGoodFont from "./use-good-font";
import SPJR from "./spjr";
import hasSalimquotes from "./has-salimquotes";
import citizen from "./citizen";

export const rules: Rule[] = [
  BlueColor,
  YellowColor,
  hasText,
  ชังชาติThaksin,
  useGoodFont,
  SPJR,
  hasSalimquotes,
  citizen,
];
