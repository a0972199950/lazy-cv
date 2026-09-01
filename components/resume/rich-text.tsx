import type { ReactNode } from "react";

/**
 * 把字串裡的 **粗體** 標記轉成 <strong>；沒有標記就原樣回傳。
 * 履歷各處（自我介紹、工作經歷要點、專案要點與重大貢獻）共用，
 * 讓資料層用 `**...**` 標出有含金量的字（數字、獨立開發、帶領等）。
 */
export function parseBold(text: string): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}
