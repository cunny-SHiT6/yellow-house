export enum Severity {
  Fail,
  ชังชาติร้ายแรง,
}

export interface AuditResult {
  title: string;
  description?: string;
  severity: Severity;
  // If type is Fail, just a normal weight
  // If type is ชังชาติร้ายแรง will be raw point that will detuct
  weight: number;
  violated?: number;
}

export interface AuditRespond {
  score: number;
  violations: Array<AuditResult>;
}

export interface Rule extends AuditResult {
  /**
   * @returns Scale from 0-1, 1 คือคะแนนเต็ม สำหรับ Type Fail
   * สำหรับ Type ชังชาติร้ายแรง จะเป็นตัวคูณแต้มที่ถูกหัก (0 คือไม่โดนหัก)
   */
  check: (html: string, css: string) => number;
}
