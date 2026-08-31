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
9. **不得弱化 `/source` 的事實**：「調整語氣以契合 JD」只允許同義改寫，**不允許改變事實的強度**。若 `/source` 的實際情況**強於** JD 的要求，一律以 `/source` 為準寫出更強的事實，不得為了貼合 JD 字面而降級描述。
   - ❌ 錯誤示範：JD 寫 "with minimal direction"，就把 `/source` 中「完全獨立開發、無其他工程師協作」寫成「在極少指導下交付」——這是用 JD 的語言把使用者的經歷往下修。
   - ✅ 正確做法：寫「完全獨立開發」「由個人單獨完成」，因為那才是事實，而且比 JD 的門檻更強。
   - 同理適用於年資（JD 要 3 年、實際 7 年就寫 7 年）、團隊規模、成果數字等所有可比較的維度。
   - 這條與「禁止虛構」是一體兩面：**誇大與低估都是失真**，前者造假、後者浪費真實籌碼。

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
- **必須逐條具名對應 JD 的 Minimum Qualifications**（最重要的一條規則）：拆解 JD 的 Minimum Qualifications 後，自我介紹必須為**每一條**提供「**具名的公司／專案** + **具體事實**」的直接對應，讓讀者不需要推論就能判斷該條是否滿足。
  - ❌ 禁止只寫抽象能力描述而不指出是在哪一段經歷、用什麼方式達成的。例如 JD 要求「獨立負責交付、僅於里程碑審核」，寫成「具備從設計交接到正式上線的端到端 ownership 能力」是**不合格**的——素材可能選對了，但讀者看不出對應到哪段經歷。
  - ✅ 正確做法：「AI.Book 與 FundFluent 兩份契約案為完全獨立開發：AI.Book 的線上相片書編輯器 6 個月內從零打造上線……技術選型與架構皆自行決定，僅於里程碑節點對齊，而非逐步審核。」——公司名、專案名、具體事實、對應的 JD 條目一次到位。
  - 一段經歷可同時對應多條 Required；一條 Required 也可由多段經歷佐證（例如 REST 與 GraphQL 分別由不同專案佐證），但**每一條 Required 都必須至少有一個具名對應**。
  - 若某條 Required 在 `/source` 中找不到對應素材，**不要迴避、不要用模糊話術帶過**，直接不寫——那是真實缺口，留待第五階段的「待改進項目」誠實列出。
- **字數上限**：zh-TW 版與 en 版**皆以字元數（character count，不含標點與空白）計算**，zh-TW 版**不得超過 350 字元**；en 版**不得超過 700 字元**。寫完後要實際數過字元數確認合規（英文版不是數 words，是數 characters），超過就刪減內容，不能用縮小字級或其他排版手段規避限制。
  - 兩版上限不同是刻意的：中文字元的資訊密度約為英文的兩倍，同樣的內容中文寫得下、英文寫不下。**不要因為 zh 版寫完只用了 300 字元，就把 en 版也壓到 300**——兩版應承載等量資訊，而非等量字元。
- **內容優先順序**（字數有限，必須取捨時依此排序，越前面越優先保留）：
  1. **與 JD 直接對應的經歷**：優先挑 `/source` 裡能直接回應 JD 條件（尤其 Required/Minimum qualifications，其次 Preferred/Nice-to-have）的經歷來寫。例如 JD 要求「獨立處理模糊需求、僅在里程碑審查」，就對應 `/source` 裡 AI.Book / FundFluent 這類完全獨立契約案，應該優先寫進去、寫得具體。
  2. **專案的具體重大貢獻**：JD 沒有直接要求、但能展現技術深度或超出職缺期待的實績（例如效能優化的量化成果、獨立產品的營運數據）。
  3. **資歷與公司背景**：年資、任職過的公司規模（大型企業 / 新創）這類概況性描述，只在還有餘裕時補充，不可為了塞這類內容擠掉前兩項。
- **分段**：在字數限制內視內容量分 1–2 段（使用 `\n\n` 換行），不需要硬湊滿固定主題數，每段仍只聚焦一個主題，**禁止一整段長文**。

### 2. 工作經歷 (Work Experience)

列出 `/source` 中的**所有**工作經歷，按時間由新到舊排序——完整的時間軸能讓 ATS 正確計算總年資，這是「只列最近幾份」做不到的。

- **最近 4 段**撰寫 `highlights`，每段**最多 3 條**，見文字撰寫規範第 8 點的篩選順序。
- **第 5 段以後僅保留標題**：`company`、`role`、`period`、`logo` 照列，`highlights` 給**空陣列 `[]`**，不寫要點。這些條目純粹作為年資與職涯連續性的佐證，寫要點反而會稀釋前 4 段的注意力。
  - `components/resume/work-experience.tsx` 已支援空 `highlights`（不會渲染出懸空的分隔線），不需為此改組件。
- **職稱、期間、logo 一律照 `/source` 原文填寫**，不改寫、不簡化。原始記載為雙職稱時（例如「數位廣告優化師 & 前端工程師」）保留完整寫法——多一組關鍵字對 ATS 是加分。
- **可排除明顯有害的短期任職**：任職未滿 3 個月，且產業性質或離職原因會引發疑慮者（例如成人內容產業、`/source` 中自帶公開爭議註記者），可以不列。
  - 排除前**必須向使用者說明理由並取得同意**，不得自行決定。
  - 排除造成的時間軸空檔若在 3 個月內，不需要額外說明。

### 3. 專案介紹 (Projects)

#### 數量
- 挑選與該 JD 最相關的 **4–6 個專案**，說明技術亮點與達成成果。
- **寧可少而精準**：與 JD 無直接對應的專案不列入，**不為湊數量而降低平均相關性**。4 個高度對應的專案優於 6 個稀釋過的專案。

#### 排序（與選擇同等重要）
履歷是由上往下讀的，第 1 個專案的權重遠高於最後一個。

- 依「對 JD **Minimum Qualifications** 的對應強度」由強到弱排序。
- **第 1 個專案必須對應 JD 最核心的 Required 條目**。
- 同一條 Required 有多個專案佐證時，把**技術棧命中最多、成果最具體**的排前面。
- 排序完成後自我檢查：逐一走過 JD 的 Required 清單，確認每一條都能在前幾個專案中找到落點。

#### 同一家公司有多個專案時的選擇規則
`/source` 中同一家公司常有多個專案（例如 FundFluent 有 UI Kit、SME Portal、Partner Portal）。

- 必須**逐一攤開各專案的「🔧 技術棧」行**與 JD 的 Required／Preferred 比對，選**命中數最多**者。
- **不得僅憑專案名稱的字面聯想決定**。例如 JD 有「design systems」的 Preferred，就直覺選「UI Kit Library」，卻沒發現 SME Portal 的技術棧是 `React 17 + Next.js 12 + TypeScript + React Context/useReducer`——同時命中 Required 的 React/TypeScript、Preferred 的 Next.js 與狀態管理，對應強度高得多。

#### 產品力／熱情名額（選用）
- 可保留**最多 1 個**名額給「有真實使用者數據的個人專案」，作為主動打造好用產品的佐證（例如上架商店的擴充套件、有 DAU/WAU 與評價數據的個人作品）。
- 該專案仍須至少對應一條 JD 職責或 Preferred，不能純粹為了展示熱情而佔用名額。
- 放在最後一個位置，不佔用前段對應 Required 的名額。

#### 內容規範
- 每個專案的 `highlights` 與 `contributions` **各自最多 3 條**，見文字撰寫規範第 8 點的篩選順序。
- 每個專案的 `stack` 陣列（見 `components/resume/types.ts`）必須取自 `/source` 該專案項目下方「🔧 技術棧」那一行，依逗號拆解逐字填入，**不可自行推測或添加該行沒有列出的技術**；若該行關鍵字過多，可篩選出與 JD 最相關的子集，但篩選後不可新增該行沒有的技術。
- **若該專案在 `/source` 中沒有「🔧 技術棧」行**（部分專案只有描述文字）：只能使用**專案描述文字中明確出現**的技術名稱，一樣不可推測。例如描述寫「將 php 架構的 CMS 重構為 React & NextJS app router 架構，使用 iframe 實現微服務」，`stack` 就只能是 `["React", "NextJS", "App Router", "iframe 微服務"]`，不可因為「這個專案應該有用 TypeScript」就自行加上。
- `image` 欄位必須取自 `/source` 該專案項目下方的圖片連結，**不可挪用其他專案的圖片**。同一家公司有多個專案時尤其要核對——各專案的截圖是分開列的。

### 4. 技術棧可視化 (Tech Stack Visualization)
- 根據 `/source` 中的技能資料生成，使用 `john-hsieh/skill-cloud.tsx` 與 `john-hsieh/skill-beam.tsx` 組件。
- **完整呈現所有技術分類，不做任何客製化或刪減**。

### 5. 技能關鍵字 (Skills & Keywords)

本區塊規定「完整呈現、不做任何客製化」，因此**沒有理由讓 AI 逐個重打一次**——逐字重打正是遺漏的來源。

- **直接整塊複製** `app/(download-pdf)/john-hsieh/{locale}/page.tsx` 中的 `skillKeywordRows`，**不做任何篩選、排序、增刪或客製化**（僅需將基礎範本的 2 空格縮排調整為目標檔案的縮排風格）。
- 生成後**核對關鍵字總數與基礎範本一致**，數量不符即代表有遺漏，必須修正。
- 若基礎範本本身落後於 `/source`（`/source` 有新技能但範本沒有），應先執行 `/update` skill 同步基礎範本，再複製；不要只在單份客製化履歷裡補，那會讓兩邊持續分歧。

> **為什麼要這樣改**：曾發生過客製化履歷只有 90 個關鍵字、基礎範本有 134 個，漏掉的 44 個裡包含 Redux、Playwright、React Query、Testing Library、Zod——而這些正是當次 JD 明文列出的 Preferred Qualifications。這種遺漏是靜默的，不會報錯，且會一路存活到下一次生成。

### 6. 學歷與證書 (Education & Certifications)
- 列出最高學歷及與職位相關的專業證照（如 AWS、JLPT 等）。

### 7. 數據統計 (Stats)
- `stats` 陣列**直接沿用基礎範本 `john-hsieh/{locale}/page.tsx` 的數值**，不自行調整或重算。
- 若認為某個數值有誤，應修正基礎範本與 `/source`（見 `/update` skill），而非只改單份履歷——否則各份履歷之間會出現同一項數據不一致的情形。

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
- **Constraint**：禁止修改或虛構 `/source` 中的事實，僅允許調整描述語氣以契合 JD。「調整語氣」不包含改變事實強度——**誇大與低估同樣禁止**，見文字撰寫規範第 9 點。

---

## 第四階段：機械式合規自檢

ATS 計分之前，先做這份自檢。**這些是規則違反，不是品質問題，必須全部通過才進入計分。**

可執行 `pnpm check-cv {uuid}` 自動檢查前 7 項（見 `scripts/check-cv.ts`）；該指令不可用時，逐項人工核對。

| # | 檢查項目 | 判定標準 |
|---|---|---|
| 1 | 技能關鍵字完整性 | `skillKeywordRows` 關鍵字總數 **等於**基礎範本的總數 |
| 2 | bullet 數量上限 | 所有 `highlights` / `contributions` 陣列**各自 ≤ 3 條** |
| 3 | 句尾句號 | 所有 bullet **不以 `.` 或 `。` 結尾** |
| 4 | 弱動詞開頭 | 無 bullet 以「負責」「參與」/ "Responsible for"、"Participated in"、"Helped"、"Worked on"、"Utilized" 開頭 |
| 5 | 人稱代名詞 | 全文無「我的」「我們」/ "I"、"my"、"we" |
| 6 | 自我介紹字元數 | zh-TW ≤ 350、en ≤ 700（不含標點與空白） |
| 7 | 個人網站連結 | `contacts` 含 `type: "website"` 且 `href` 指向 `https://lazy-cv.com/{uuid}/{locale}`，locale 與檔案所在語系一致 |
| 8 | `jobTitle` 格式 | 符合「`{職稱} - {當前公司}` ＋ `\n` ＋ `應徵/Apply for {JD 職稱} - {company_name}`」 |
| 9 | `stack` 溯源 | 每個專案 `stack` 的**每一個字串**都出現在 `/source` 對應專案的「🔧 技術棧」行（或無該行時，出現在專案描述文字中） |
| 10 | `image` 溯源 | 每個專案的圖片連結都取自 `/source` 該專案項目下方，未挪用其他專案的圖片 |
| 11 | JD Required 具名對應 | JD 的**每一條** Minimum Qualification 都能在自我介紹中找到具名的公司／專案對應（見第二階段 §1） |
| 12 | 專案排序 | 第 1 個專案對應 JD 最核心的 Required；整體依對應強度由強到弱 |
| 13 | 事實強度 | 無任何一處為了貼合 JD 字面而弱化 `/source` 的事實（見文字撰寫規範第 9 點） |
| 14 | 工作經歷完整性 | `/source` 的工作經歷**全部**列出（經同意排除者除外），最近 4 段有 `highlights`、第 5 段以後為 `highlights: []` |
| 15 | 型別檢查 | `npx tsc --noEmit` 對這兩個檔案無錯誤 |

任一項未通過 → 修正後重跑自檢，全部通過才進入下一階段。

---

## 第五階段：ATS 計分與迭代優化

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
3. 附上第五階段的 ATS 計分結果與待改進項目。

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
| 合規自檢腳本 | `scripts/check-cv.ts`（`pnpm check-cv {uuid}`） |
| 客製化履歷目錄 | `app/(download-pdf)/{uuid}/` |
| Cover Letter（另見 `/cover-letter` skill） | `app/(download-pdf)/{uuid}/cover-letter-{en,zh-TW}.md` |

---

## 決策點

- 若 JD 語言與 `/source` 語言不一致 → 仍生成雙語版本，以 `/source` 對應語言為準。
- 若 `/source` 中經歷不足 4 間 → 全部撰寫 `highlights`，沒有「僅標題」的段落，不虛構補足。
- 若 JD 頁面無法抓取 → 依序嘗試 chrome-devtools → firecrawl → 請使用者手動貼上 JD，再由 AI 寫入 `jd.md`。
