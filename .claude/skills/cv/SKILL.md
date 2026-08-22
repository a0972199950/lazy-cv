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

## 文字撰寫規範（適用於自我介紹、工作經歷、專案介紹所有文字內容）

1. **XYZ 公式**：每條 bullet 盡量包含「強動詞開頭的具體行動 + 使用的技術/方法 + 產生的具體結果」，而不是只列職責。
2. **禁用詞**：不用 "I/my/we"、「我的/我們」等人稱代名詞；不用 "Responsible for"、「負責」、"Participated in"、「參與」、"Helped"、"Worked on"、"Utilized" 這類弱動詞開頭；不用主觀自評句（如「擅長溝通」「熱情積極」），改用履歷中已有的具體事實佐證，不額外貼標籤。
3. **一條 bullet 一個成就**：禁止把多句話塞進同一條 `highlights`/`contributions` 陣列字串裡（例如「做了 A。也做了 B。還做了 C。」）。每個成就獨立成一條，1-2 行為佳；塞太多句子會讓「量化比例」這類統計指標失真，也違反 ATS 逐條解析的預期。
4. **不加句尾句號**：bullet 不是完整句子，不需要句號收尾。
5. **數字用阿拉伯數字**：8 不寫 eight，30% 不寫 thirty percent。
6. **Domain context 優先**：每段經歷/專案盡量講清楚產業、系統類型、規模，而非只列技術名詞——這是把普通履歷變突出的關鍵。
7. **結果要具體，不強求數字**：工程師的產出不是每一項都能量化（不是 PM，架構決策、程式碼可維護性、跨團隊標準制定這類工作本來就沒有天生的百分比）。bullet 的「結果」可以是數字，也可以是「達成前後端完全分離」「解決了 XX 問題」這種具體、可驗證的質化成果——重點是具體、不是空泛的職責描述。只在 `/source` 或已連結的 `Project.contributions`/`highlights` 裡有真實依據時才寫進 bullet，絕不能為了湊數字或湊「有結果」而編造。
8. **每份經歷/專案的 bullet 上限為 3 條**：`Experience.highlights`、`Project.highlights`、`Project.contributions` 各自陣列**最多 3 個項目**（原本項目數 ≤3 則不受影響）。若 `/source` 或既有素材中該經歷/專案的候選 bullet 超過 3 條，只留下以下優先順序中最強的 3 條，其餘捨棄，不得為了保留資訊而硬塞成一條或超過 3 條：
   1. 與該 JD 直接對應的內容（技術棧、職責、關鍵字命中）
   2. 該經歷/專案中最出色、最具體的貢獻或成果（尤其有量化結果者）
   3. 展現技術深度或架構決策能力的內容
   同一份經歷/專案中若有多條 highlights 描述同一類量化成果（例如都是效能優化百分比），只保留其中最亮眼的一條，避免同質重複佔用名額。

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
- 包含頭像 (Avatar) 與聯絡方式 (Email/GitHub/LinkedIn/Personal Website)。
- **必須包含「個人網站」聯絡方式**：在 `contacts` 陣列中新增一筆 `type: "website"` 的項目，`href` 指向這份履歷自己發布後的網址 `https://lazy-cv.com/{uuid}/{locale}`（`en` 版連到 `/en`，`zh-TW` 版連到 `/zh-TW`），讓 PDF 列印時附上可回連本頁面的連結。`label` 固定為 `"Personal Website"`（zh-TW 版為 `"個人網站"`）。範例（`en/page.tsx`）：
  ```ts
  { href: "https://lazy-cv.com/{uuid}/en", type: "website", label: "Personal Website" },
  ```
  zh-TW 版對應：
  ```ts
  { href: "https://lazy-cv.com/{uuid}/zh-TW", type: "website", label: "個人網站" },
  ```
- **`jobTitle` 固定格式**：第一行寫「當前職稱 - 當前公司」，格式為 `{當前職稱} - {當前公司}`。**當前職稱一律統一寫成 `Senior Software Engineer`（zh-TW 版寫「資深軟體工程師」）**，不論 `/source` 中該筆工作經歷原始記載的職稱為何；當前公司仍取自 `/source` 中最新一筆（時間最新、period 為「至今」）工作經歷的公司名稱（例如 `Senior Software Engineer - TikTok`，zh-TW 版寫「資深軟體工程師 - TikTok」）。換行（`\n`）後寫 `Apply for {JD 職稱} - {company_name}`（zh-TW 版寫「應徵 {JD 職稱} - {company_name}」），`{JD 職稱}` 取自 `jd.md` 裡的目標職位名稱，`{company_name}` 取自第一階段抓取的目標公司名稱。
- 根據 `/source` 背景說明為何適合該職位，強調與 JD 匹配的技術棧與軟實力。
- 可根據 `/source` 生成資料裡沒有的語句，但**不可違背事實**。
- **只寫 CV 該負責的內容**：聚焦「這個人有沒有資格、做過什麼、做得多好」的事實陳述，不寫求職動機、對公司的貢獻宣言、或「為什麼選我優於其他候選人」這類說服性語句——這些屬於 cover letter 的任務，改由 `/cover-letter` skill 產出，兩者不重複。
- **字數上限**：zh-TW 版與 en 版**皆以字元數（character count，不含標點與空白）計算**，zh-TW 版**不得超過 350 字元**；en 版**不得超過 500 字元**。寫完後要實際數過字元數確認合規（英文版不是數 words，是數 characters），超過就刪減內容，不能用縮小字級或其他排版手段規避限制。
- **內容優先順序**（字數有限，必須取捨時依此排序，越前面越優先保留）：
  1. **與 JD 直接對應的經歷**：優先挑 `/source` 裡能直接回應 JD 條件（尤其 Required/Minimum qualifications，其次 Preferred/Nice-to-have）的經歷來寫。例如 JD 要求「獨立處理模糊需求、僅在里程碑審查」，就對應 `/source` 裡 AI.Book / FundFluent 這類完全獨立契約案，應該優先寫進去、寫得具體。
  2. **專案的具體重大貢獻**：JD 沒有直接要求、但能展現技術深度或超出職缺期待的實績（例如效能優化的量化成果、獨立產品的營運數據）。
  3. **資歷與公司背景**：年資、任職過的公司規模（大型企業 / 新創）這類概況性描述，只在還有餘裕時補充，不可為了塞這類內容擠掉前兩項。
- **分段**：在字數限制內視內容量分 1–2 段（使用 `\n\n` 換行），不需要硬湊滿固定主題數，每段仍只聚焦一個主題，**禁止一整段長文**。

### 2. 工作經歷 (Work Experience)
- **嚴格選取最近 5 間公司**，按時間由新到舊排序。
- 每間公司的 `highlights` **最多 3 條**，見文字撰寫規範第 8 點的篩選順序。

### 3. 專案介紹 (Projects)
- 挑選與該 JD **最相關的 6 個專案**，說明技術亮點與達成成果。
- 每個專案的 `highlights` 與 `contributions` **各自最多 3 條**，見文字撰寫規範第 8 點的篩選順序。
- 每個專案的 `stack` 陣列（見 `components/resume/types.ts`）必須取自 `/source` 該專案項目下方「🔧 技術棧」那一行，依逗號拆解逐字填入，**不可自行推測或添加該行沒有列出的技術**；若該行關鍵字過多，可篩選出與 JD 最相關的子集，但篩選後不可新增該行沒有的技術。

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

## 第四階段：ATS 計分與迭代優化

完成 `en`/`zh-TW` 兩版 `page.tsx` 後，套用以下公式評分並反覆優化，**目標 85% 以上**，直到達標或確認無法再誠實提高為止。

### 計分公式

```
Score = 0.4 × required_skills_coverage
      + 0.2 × nice_to_have_coverage
      + 0.2 × achievement_quantification_rate
      + 0.1 × section_completeness
      + 0.1 × keyword_distribution
```

### 計分步驟

1. 從 `jd.md` 拆出 Required（must-have／minimum qualifications）與 Nice-to-have（preferred／a plus, not a must）需求清單。JD 沒有明確切分時，預設全部列為 Required，除非該條文字本身寫明「not a must」之類的字樣。
2. 逐項核對這份履歷（不是 `/source`，是實際生成的 `page.tsx` 內容）,標記 Found／Partial／Not Found，算出：
   - `required_skills_coverage` = Found 記 1、Partial 記 0.5、Not Found 記 0，加總 / 總項數
   - `nice_to_have_coverage`：同樣算法
3. 統計 Work Experience 裡所有 bullet（一條 `highlights` 陣列字串＝一條 bullet，不得把多句塞進同一條裡稀釋分母，見上方文字撰寫規範第 3 點）中「含具體可驗證結果」的比例，得出 `achievement_quantification_rate`。具體結果不強求數字——數字指標、明確的技術成果（如「達成前後端分離」「解決了 XX 問題」）、或具體規模描述（team size、時間）都算達標；只列職責、沒有任何具體結果的 bullet（如「參與 XX 專案開發」）才算未達標。
4. 檢查 Contact / Summary（自我介紹）/ Skills / Experience / Education 五個標準區塊是否齊全，得出 `section_completeness`（present / 5）。
5. 檢查 JD 關鍵字是否分散在 Summary / Experience / Projects / Skills 多個區塊，而非集中在一處，得出 `keyword_distribution`（含 JD 關鍵字的區塊數 / 有內容的區塊總數）。

### 迭代優化規則（不能編造）

只能透過以下方式提高分數：
- 把已存在於 `/source` 或已連結 Project 但這次生成時漏掉的**真實**內容補進去（例如 JD 要求的技能其實 `/source` 有記錄，但沒被選進這份客製化版本）
- 調整敘述方式讓已有的真實成就更貼近 JD 用語（同義詞替換，不是造假）
- 修正結構問題（缺 Skills 區塊、bullet 被壓縮成長段落稀釋量化率、關鍵字集中在單一區塊等）
- 把真實擁有的關鍵字補進 Skills 區塊 + 至少一條經歷 bullet（每個必要技能至少出現在 2 處）

**絕對禁止**：新增 `/source` 沒有記載的技能、經歷、數字或成就。找不到真實依據的缺口，就是真實的技能落差，必須保留，不可粉飾。

每次調整後重新計算分數。**停止條件**（任一達成即停止迭代）：
- 分數達到 85% 以上
- 連續一輪調整後分數沒有變化（代表剩下的缺口是真實技能落差，不是寫作或結構問題）

### 完成後輸出計分結果

在完成後的回報中附上：
1. **Estimated ATS Score**（最終百分比）
2. **Keyword Coverage 表格**（JD 需求 / 類別 / Found·Partial·Not Found / 出現位置）
3. **Scoring Breakdown**（五個子項的實際計算過程，不只給結論數字）
4. **待改進項目**：列出無法透過誠實手段再提高的真實缺口（例如「JD 要求 3 年行動開發經驗，但整個職涯沒有原生 App 開發紀錄」），並說明為什麼沒有繼續優化空間。

---

## 完成後

1. 回報 UUID 並確認檔案已寫入。
2. 直接在瀏覽器開啟 `http://localhost:3001/{uuid}/zh-TW` 以供檢視（專案 `pnpm dev` 固定使用 port 3001，非預設的 3000）。
   - 若該 port 已被佔用，代表開發環境正在執行，直接開啟連結即可。
3. 附上第四階段的 ATS 計分結果與待改進項目。

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
| Cover Letter（另見 `/cover-letter` skill） | `app/(download-pdf)/{uuid}/cover-letter-{en,zh-TW}.md` |

---

## 決策點

- 若 JD 語言與 `/source` 語言不一致 → 仍生成雙語版本，以 `/source` 對應語言為準。
- 若 `/source` 中經歷不足 5 間 → 列出所有現有經歷，不虛構。
- 若 JD 頁面無法抓取 → 依序嘗試 chrome-devtools → firecrawl → 請使用者手動貼上 JD，再由 AI 寫入 `jd.md`。
