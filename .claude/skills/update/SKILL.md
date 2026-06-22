---
name: update
description: "更新 lazy-cv 基礎履歷範本。使用者輸入 `/update`、要求「更新履歷」、「同步 source」時觸發。將 /source 中的最新經歷與技能同步到 john-hsieh 範本，並嚴格核對 skillKeywordRows 不得遺漏任何關鍵字。"
---

# `/update` — 更新基礎履歷範本

## 核心原則

1. **事實來源唯一**：所有內容必須基於 `/source` 目錄下的 Markdown 檔案（`resume-en.md`、`resume-zh-TW.md`）。禁止虛構經歷或技能。
2. **語氣可調整**：允許調整描述方式（提煉重點、長話短說），但不可修改事實。
3. **雙語支援**：必須同步更新 `en/page.tsx` 與 `zh-TW/page.tsx` 兩版。
4. **回答語言**：一律使用**繁體中文**與使用者溝通。

---

## 步驟

1. **讀取事實來源**：讀取 `source/resume-en.md` 與 `source/resume-zh-TW.md` 的最新內容。
2. **讀取現有範本**：讀取 `app/(download-pdf)/john-hsieh/en/page.tsx` 與 `app/(download-pdf)/john-hsieh/zh-TW/page.tsx`。
3. **比對差異**：找出 `/source` 中有但範本尚未反映的內容（新工作經歷、新專案、新技能等）。
4. **更新範本**：
   - 確保 100% 包含 `/source` 中所有內容（工作經驗、專案經驗等）。
   - 調整描述語氣以符合 UI 呈現（提煉重點、精簡描述）。
   - 保持與 `/source` 資料完全一致。
5. **`skillKeywordRows` 強制規則**（不可省略任何步驟）：
   1. **先完整列出** `/source` 中「技能專長詳細分析」所有分類下的**每一個**技能關鍵字。
   2. **逐一核對**目前 `page.tsx` 中的 `skillKeywordRows`，找出所有 `/source` 中有但目前沒有的關鍵字。
   3. 將遺漏的關鍵字**全數補入**適當的列，或新增列來容納，**不得遺漏任何一個**。
   4. 每列最多放 **10 個**關鍵字，若技能數量超過則新增列。
   5. **禁止**以「已涵蓋大部分」或「主要技能已列出」為由省略任何關鍵字。
6. **驗證**：確認更新後的檔案仍可正確編譯（無 TypeScript 錯誤）。

---

## 關鍵檔案參考

| 用途 | 路徑 |
|------|------|
| 事實來源 (英文) | `source/resume-en.md` |
| 事實來源 (中文) | `source/resume-zh-TW.md` |
| 基礎履歷範本 | `app/(download-pdf)/john-hsieh/{en,zh-TW}/page.tsx` |
| 技術棧組件 | `app/(download-pdf)/john-hsieh/skill-cloud.tsx`, `skill-beam.tsx` |
| 共用組件 | `components/resume/*.tsx` |
| 型別定義 | `components/resume/types.ts` |
