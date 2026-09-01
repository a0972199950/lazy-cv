/**
 * 從 Experience.period 字串推算任職時長（幾年幾個月），給 WorkExperience UI 與純表格 PDF 共用。
 *
 * 支援的格式：
 *   - "2021.08 - 2024.10"、"2024.11 - 至今 / 現在"（中日文範本）
 *   - "Aug 2021 – Oct 2024"、"Nov 2024 – Present"（英文範本）
 *   - "2021年8月 - 2024年10月"
 * 解析不出來就回傳 null，呼叫端直接不顯示備註。
 */

const MONTHS: Record<string, number> = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
};

const PRESENT = /^(present|now|current|current position|至今|迄今|現在|今)$/i;

type YM = { y: number; m: number };

function parseEndpoint(raw: string): YM | null {
  const t = raw.trim();

  let m = t.match(/^(\d{4})[.\/-](\d{1,2})$/);
  if (m) return { y: +m[1], m: +m[2] };

  m = t.match(/^(\d{4})\s*年\s*(\d{1,2})\s*月$/);
  if (m) return { y: +m[1], m: +m[2] };

  m = t.match(/^([A-Za-z]{3,})\.?\s+(\d{4})$/);
  if (m) {
    const mm = MONTHS[m[1].slice(0, 3).toLowerCase()];
    if (mm) return { y: +m[2], m: mm };
  }

  m = t.match(/^(\d{4})$/);
  if (m) return { y: +m[1], m: 1 };

  return null;
}

/**
 * 從 period 字串算出總月數；解析不出來回傳 null。
 */
export function durationMonths(period: string): number | null {
  const parts = period.split(/\s*[–—-]\s*/);
  if (parts.length < 2) return null;

  const start = parseEndpoint(parts[0]);
  if (!start) return null;

  const endRaw = parts[parts.length - 1].trim();
  let end: YM;
  if (PRESENT.test(endRaw)) {
    const now = new Date();
    end = { y: now.getFullYear(), m: now.getMonth() + 1 };
  } else {
    const parsed = parseEndpoint(endRaw);
    if (!parsed) return null;
    end = parsed;
  }

  const months = (end.y - start.y) * 12 + (end.m - start.m);
  return months < 0 ? null : months;
}

/**
 * @param cjk  true 時輸出「1 年 10 個月」，false 時輸出「1 yr 10 mos」
 */
export function formatMonths(months: number, cjk: boolean): string {
  const years = Math.floor(months / 12);
  const rem = months % 12;

  if (cjk) {
    const y = years > 0 ? `${years} 年` : "";
    const mo = rem > 0 ? `${rem} 個月` : "";
    return [y, mo].filter(Boolean).join(" ") || "未滿 1 個月";
  }
  const y = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const mo = rem > 0 ? `${rem} mo${rem > 1 ? "s" : ""}` : "";
  return [y, mo].filter(Boolean).join(" ") || "<1 mo";
}

/**
 * @param period  Experience.period 原字串
 * @param cjk     true 時輸出「1 年 10 個月」，false 時輸出「1 yr 10 mos」
 * @returns       備註文字（不含括號），或無法解析時回傳 null
 */
export function formatDuration(period: string, cjk: boolean): string | null {
  const months = durationMonths(period);
  return months === null ? null : formatMonths(months, cjk);
}
