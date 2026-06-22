---
name: cv
description: "針對特定職缺生成客製化履歷。使用者輸入 `/cv [URL]`、要求「為這個職缺生成履歷」、「幫我投這份工作」時觸發。抓取 JD、執行 pnpm cv 指令、生成雙語 page.tsx，並在瀏覽器開啟預覽。"
---

# `/cv [URL]` — 針對職缺生成客製化履歷

## 核心原則

1. **事實來源唯一**：所有內容必須基於 `/source` 目錄下的 Markdown 檔案（`resume-en.md`、`resume-zh-TW.md`）。禁止虛構經歷或技能。
2. **語氣可調整**：允許根據 JD 調整描述方式（提煉重點、長話短說），但不可修改事實。
3. **雙語支援**：必須產生 `en/page.tsx` 與 `zh-TW/page.tsx` 兩版。
4. **回答語言**：一律使用**繁體中文**與使用者溝通。

---

## 第一階段：數據採集與環境準備

1. 使用 **chrome-devtools** MCP 訪問 `[URL]`，抓取 `company_name` 與 `job_description` (JD)。
   - **Fallback**：若 chrome-devtools 無法抓取，改用 **firecrawl** 抓取頁面內容。
   - **最終 Fallback**：若 firecrawl 也失敗，請使用者手動貼上 JD 內容，再由 AI 寫入 `jd.md`。
2. 將 JD 原始內容存入 `jd.md`（位於專案根目錄）。
3. 執行 `pnpm cv {company_name} {URL}` 取得產生的 `{uuid}`。

---

## 第二階段：內容過濾與生成

根據 `jd.md` 內容與 `/source` 資料，為 `{uuid}/en/page.tsx` 與 `{uuid}/zh-TW/page.tsx` 生成以下區塊：

### 1. 自我介紹 (Professional Summary)
- 包含頭像 (Avatar) 與聯絡方式 (Email/GitHub/LinkedIn/Portfolio)。
- 根據 `/source` 背景說明為何適合該職位，強調與 JD 匹配的技術棧與軟實力。
- 可根據 `/source` 生成資料裡沒有的語句，但**不可違背事實**。
- 包含 cover letter 內容，例如「我可以為 {company name} 做出的貢獻為...」、「選擇我優於其他候選人，是因為我具備...強項」等。
- **必須分段呈現**（使用 `\n\n` 換行），每段聚焦一個主題（例如：背景概述、團隊協作與 Mentor 經驗、獨立交付與創業精神、使用者導向的工程理念、對目標公司的貢獻），**禁止一整段長文**。

### 2. 工作經歷 (Work Experience)
- **嚴格選取最近 5 間公司**，按時間由新到舊排序。

### 3. 專案介紹 (Projects)
- 挑選與該 JD **最相關的 6 個專案**，說明技術亮點與達成成果。

### 4. 技術棧可視化 (Tech Stack Visualization)
- 根據 `/source` 中的技能資料生成，使用 `john-hsieh/skill-cloud.tsx` 與 `john-hsieh/skill-beam.tsx` 組件。
- **完整呈現所有技術分類，不做任何客製化或刪減**。

### 5. 技能關鍵字 (Skills & Keywords)
- 根據 `/source` 中的技能資料生成**完整的 `skillKeywordRows`**，包含**全部**關鍵字，**不做任何客製化或刪減**。
- 強制規則：
  1. **先完整列出** `/source` 中「技能專長詳細分析」所有分類下的每一個技能關鍵字。
  2. **逐一核對**，找出 `/source` 中有但尚未列入的關鍵字，全數補入。
  3. 每列最多放 **10 個**關鍵字，超過則新增列。
  4. **禁止**以「已涵蓋大部分」為由省略任何關鍵字。

### 6. 學歷與證書 (Education & Certifications)
- 列出最高學歷及與職位相關的專業證照（如 AWS、JLPT 等）。

---

## 第三階段：開發規範

- **Code**：參考 `john-hsieh/{locale}/page.tsx` 的寫法，使用 `@/components/resume` 中的共用組件：
  - `ResumeLayout`, `HeroProfile`, `WorkExperience`, `ProjectsGrid`
  - `TechStackVisualization`, `SkillKeywords`, `EducationCerts`, `LanguageToggle`
  - 以及對應的 types（`Experience`, `Project`, `ContactItem`, `SkillKeywordRow`, `EducationItem`, `CertificationItem` 等）
  - 技術棧可視化使用 `john-hsieh/skill-cloud.tsx` 與 `john-hsieh/skill-beam.tsx`
  - 資料硬編碼在 `page.tsx` 中。
- **Style**：參考 `john-hsieh/zh-TW/page.tsx` 的 Tailwind CSS 風格，確保響應式設計與雙語切換按鈕。
- **SEO**：標題與描述需根據 JD 客製化。
- **Constraint**：禁止修改或虛構 `/source` 中的事實，僅允許調整描述語氣以契合 JD。

---

## 完成後

1. 回報 UUID 並確認檔案已寫入。
2. 直接在瀏覽器開啟 `http://localhost:3000/{uuid}/zh-TW` 以供檢視。
   - 若 port 3000 已被佔用，代表開發環境正在執行，直接開啟連結即可。

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
| 建立履歷腳本 | `scripts/create-cv.ts` |
| 客製化履歷目錄 | `app/(download-pdf)/{uuid}/` |

---

## 決策點

- 若 JD 語言與 `/source` 語言不一致 → 仍生成雙語版本，以 `/source` 對應語言為準。
- 若 `/source` 中經歷不足 5 間 → 列出所有現有經歷，不虛構。
- 若 JD 頁面無法抓取 → 依序嘗試 chrome-devtools → firecrawl → 請使用者手動貼上 JD，再由 AI 寫入 `jd.md`。
