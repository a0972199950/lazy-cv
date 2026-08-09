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

## 文字撰寫規範（適用於自我介紹、工作經歷、專案介紹所有文字內容）

1. **XYZ 公式**：每條 bullet 盡量包含「強動詞開頭的具體行動 + 使用的技術/方法 + 產生的具體結果」，而不是只列職責。
2. **禁用詞**：不用 "I/my/we"、「我的/我們」等人稱代名詞；不用 "Responsible for"、「負責」、"Participated in"、「參與」、"Helped"、"Worked on"、"Utilized" 這類弱動詞開頭；不用主觀自評句（如「擅長溝通」「熱情積極」），改用履歷中已有的具體事實佐證，不額外貼標籤。
3. **一條 bullet 一個成就**：禁止把多句話塞進同一條 `highlights`/`contributions` 陣列字串裡。每個成就獨立成一條，1-2 行為佳；塞太多句子會讓後續（例如 `/cv` 的 ATS 計分）統計指標失真。
4. **不加句尾句號**：bullet 不是完整句子，不需要句號收尾。
5. **數字用阿拉伯數字**：8 不寫 eight，30% 不寫 thirty percent。
6. **Domain context 優先**：每段經歷/專案盡量講清楚產業、系統類型、規模，而非只列技術名詞。
7. **結果要具體，不強求數字**：工程師的產出不是每一項都能量化（不是 PM，架構決策、程式碼可維護性、跨團隊標準制定這類工作本來就沒有天生的百分比）。bullet 的「結果」可以是數字，也可以是「達成前後端完全分離」「解決了 XX 問題」這種具體、可驗證的質化成果——重點是具體、不是空泛的職責描述。只在 `/source` 有真實依據時才寫進 bullet，絕不能為了湊數字或湊「有結果」而編造。

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
6. **新增專案時的分組規則**（`Project.company` 欄位，見 `components/resume/types.ts`）：
   1. `/source` 中列在公司名稱（`### 公司名稱`）底下的專案 → 屬於**公司專案**，該筆 `Project` 物件必須加上 `company: "..."`。
   2. `/source` 中「個人專案」段落底下的專案 → **不要**加 `company` 欄位（留空 = 個人專案）。
   3. `company` 的字串**必須跟 `experiences` 陣列中對應公司的 `company` 欄位完全一致**（一字不差，包含全形/半形括號、英文全名等），因為：
      - `page.tsx` 是用 `Object.fromEntries(experiences.map(e => [e.company, e.logo]))` 自動產生 `companyLogos` 對照表給專案卡片顯示公司 logo；字串對不上，logo 就顯示不出來（不會報錯，容易被忽略，需自行比對）。
      - `ProjectsGrid` 是用「有沒有 `company` 欄位」把專案分成「個人專案」/「公司專案」兩組顯示。
   4. `<ProjectsGrid>` 呼叫時務必同時傳入 `personalProjectsLabel`、`companyProjectsLabel`、`companyLogos={companyLogos}`（en/zh-TW 各自對應語言的標籤文案）。
7. **驗證**：確認更新後的檔案仍可正確編譯（無 TypeScript 錯誤）。

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
