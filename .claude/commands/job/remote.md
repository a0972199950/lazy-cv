---
description: 搜尋指定公司的最新遠端軟體工程職缺，讀取 source/ 資料夾中的履歷、工作經歷與求職偏好，分析職缺與使用者背景的匹配程度，篩選出真正值得投遞的職缺並提供可直接申請的連結。
---

# 遠端職缺搜尋器

你的任務不是單純列出所有找到的職缺。

你的真正任務是：

> 根據 `source/` 資料夾中的使用者履歷、工作經歷、技術能力與求職偏好，搜尋目標公司的「目前仍有效」職缺，判斷哪些職缺真正適合使用者，並提供可以直接申請的職缺連結。

核心目標：

**幫使用者從大量職缺中挑出真正值得投遞的職缺。**

---

# 1. 目標公司

預設目標公司為：

1. Supabase
2. DuckDuckGo
3. Doist
4. JFrog
5. Buffer
6. Zapier
7. Toggl
8. Help Scout

除非使用者明確要求擴大搜尋範圍，否則：

- 不要自行加入其他公司
- 不要因為搜尋結果出現其他公司就擴張目標名單
- 不要自行刪除以上公司

如果使用者指定新的公司清單，則以使用者指定的清單為準。

---

# 2. 搜尋前必須先讀取 source/

開始搜尋職缺之前，必須遞迴讀取專案中的：

`source/`

資料夾。

其中可能包含：

- 履歷
- CV
- LinkedIn 資料
- 工作經歷
- 專案經歷
- 技術能力
- Portfolio
- 求職偏好
- 薪資要求
- 地點要求
- Remote 偏好
- 公司偏好
- 過去求職紀錄
- 其他與求職相關的資料

必須先理解使用者的背景，再開始判斷職缺。

---

# 已投遞職缺排除（讀取資料庫，硬性排除規則）

在開始搜尋職缺之前，還必須查詢本專案的資料庫，取得使用者「已經投遞過（已產生客製化履歷）」的職缺清單，避免重複推薦。

## 查詢方式

執行：

```
pnpm applied-jobs
```

這個指令會讀取 Neon Postgres 的 `resumes` 資料表（透過 Drizzle），列出每一筆已產生履歷的 `company`（公司）與 `jdUrl`（職缺網址）。

如果指令執行失敗（例如資料庫連線失敗、環境變數缺失）：

**不要靜默略過這個步驟。** 明確告知使用者「無法讀取已投遞職缺紀錄，本次搜尋結果可能包含你已經投遞過的職缺」，讓使用者決定是否要在沒有排除清單的情況下繼續。

## 比對規則

針對每個新搜尋到的候選職缺，與已投遞清單逐一比對：

- **URL 比對**：比對 `jdUrl` 時忽略協定差異（http/https）、結尾斜線、以及追蹤用的 query string（例如 `utm_source`、`gh_src`、`src`、`ref` 等），只比對核心路徑（例如 ATS 的 job id）。同一個職缺常常會因為分享來源不同而帶不同的 tracking 參數，不能因為 query string 不同就誤判成不同職缺。
- **公司 + 職稱比對**：即使 URL 不同（例如同一個職缺在官方頁與 LinkedIn 各有一個網址），只要「公司相同」且「職稱相同或本質上是同一個職缺（同一個 team、同一個 level、同一個職缺描述）」，也視為已投遞過。
- 不要只因為公司名稱相同就排除——同一間公司可能有多個不同的職缺，只有職缺本身相同才算已投遞。

## 排除方式

- 比對結果為「已投遞過」的職缺：**直接排除，不列入結果表格，也不列入「找到 Y 個目前仍有效的職缺」的統計數字。**
- 這是硬性排除規則，跟第 14 節的背景匹配判斷同樣重要：一個職缺就算匹配分數很高，只要已經投遞過，一律不出現在最終結果中。
- 在最終摘要文字中，需要額外說明「已排除 N 個你先前已投遞過的職缺」，讓使用者知道篩選過程，但不需要逐一列出這些職缺的細節（除非使用者要求）。
- 如果使用者要求「也列出我投過的」或「不要排除已投遞的」，則本次執行取消這條排除規則，並在結果中明確標註哪些是已投遞過的職缺。

---

# 3. source/ 是使用者背景的主要依據

如果 `source/` 中的資訊與模型原本知道的使用者背景不同：

**以 source/ 中的最新資訊為準。**

不要因為記得以前的資訊就自行覆蓋 source/。

如果 source/ 中存在不同版本：

- 優先使用日期較新的版本
- 如果無法判斷哪一份較新，採用資訊較完整的版本
- 必要時在結果中說明存在版本衝突

不要自行猜測。

---

# 4. 從 source/ 提取使用者資料

在內部整理出以下資訊。

## 4.1 工作背景

確認：

- 目前職稱
- 工作年資
- 目前公司
- 過去公司
- Seniority
- Frontend / Backend / Full-stack 經驗
- 是否有 Tech Lead 經驗
- 是否有 mentoring 經驗
- 是否有 architecture / system design 經驗
- 是否有跨團隊合作經驗
- 是否有大型產品經驗

---

## 4.2 技術能力

整理：

- Programming Languages
- Frameworks
- Libraries
- Databases
- Cloud
- Infrastructure
- Testing
- CI/CD
- Build tools
- Architecture
- API
- DevOps

特別檢查：

- React
- TypeScript
- JavaScript
- Next.js
- Vue
- Node.js
- GraphQL
- Frontend Architecture
- Full-stack Development

不要看到某個技術只出現一次，就直接認定它是使用者的核心技能。

區分：

- 強項
- 有實際工作經驗
- 有接觸
- 僅曾使用
- 非核心技能

---

# 5. 提取使用者的求職偏好

從 source/ 中找出使用者明確表達的偏好，例如：

- Remote
- Global Remote
- Singapore
- Taiwan
- 薪資
- Seniority
- Frontend
- Full-stack
- 公司規模
- Engineering Culture
- Code Quality
- Work-life Balance
- Management Quality
- Performance Review
- Micromanagement
- PUA / Toxic Management
- 公司產業
- 不想加入的產業

只有 source/ 中有明確依據的偏好才能使用。

不要自行捏造使用者偏好。

---

# 6. 每次都必須重新搜尋網路

這是一個「目前職缺搜尋」指令。

每次執行都必須進行新的網路搜尋。

不要依賴：

- 模型記憶
- 舊搜尋結果
- 上一次執行結果
- 舊對話
- 舊職缺清單
- 舊文章
- 舊 Blog
- 過時的第三方職缺網站

使用者要求的是：

**現在還能投的職缺。**

所以每次都要重新確認。

---

# 7. 職缺搜尋來源優先級

針對每間目標公司，至少搜尋：

1. 公司官方 Careers / Jobs 頁
2. 公司官方職缺詳細頁
3. LinkedIn Jobs
4. 搜尋引擎索引的職缺頁

來源可信度依序：

1. 公司官方職缺頁
2. 公司使用的官方 ATS
3. LinkedIn
4. 其他可靠職缺網站
5. 搜尋結果 snippet

搜尋結果 snippet 只能用來「發現」職缺。

## ⚠️ 職缺列表必須讀完所有分頁

**只讀第一頁就下結論是明確禁止的。** 職缺列表頁幾乎都有分頁或無限捲動，第一頁通常只有 10～25 筆，漏掉後面幾頁會直接導致遺漏適合的職缺。

每次抓取職缺列表時，必須：

1. **先找出結果總數。** 列表頁通常會寫「38 jobs matched」「Showing 1-20 of 57」「Page 1 of 3」之類的字樣，先把這個數字記下來。
2. **逐頁抓完。** 依該網站的分頁參數往下抓（例如 Google Careers 用 `&page=2`、`&page=3`；Greenhouse / Lever / Ashby 各有自己的參數或 API；LinkedIn 用 `&start=25` 遞增），直到沒有新職缺為止。
3. **自我核對數量。** 收集到的職缺數必須等於第 1 步的總數。**對不上就不能往下做**，要回頭補抓或改用其他抓取方式（`--actions` 模擬翻頁、Browser MCP 捲動載入）。
4. **在結果中回報數字。** 明確寫出「總數 X 筆、實際讀取 X 筆」，讓使用者知道有沒有漏。

如果某個來源確實無法取得全部分頁（例如需要登入、或無限捲動載不完），必須在最終結果中**明講「這個來源只讀到前 N 筆，可能有遺漏」**，不可以靜默略過。

無限捲動的列表（例如部分 ATS 與 LinkedIn）要用 Firecrawl 的 `--actions` 反覆送出 `scroll` 動作，或改用 Browser MCP 捲到底部後再讀取，不能只抓首屏。

如果無法打開並確認職缺仍然有效：

**不要把它列為已確認的目前職缺。**

## 抓取不到職缺內容時：改用 Browser MCP

許多公司官網的職缺詳情頁採用前端 JS 動態渲染，一般的網頁抓取工具（例如 WebFetch）常常只能取得導覽列/頁面外殼，讀不到實際職缺內容，導致明明是有效職缺卻被誤判為「無法驗證」。

**遇到這種情況時，先改用 Browser MCP（Chrome 擴充功能：https://chromewebstore.google.com/detail/browser-mcp-automate-your/bjfgambnhccakkhmkepdoekmckoijdlc，對應 `mcp__browsermcp__*` 工具）在真實瀏覽器中開啟該職缺頁，再放棄。**

具體做法：

1. 用 `mcp__browsermcp__browser_navigate` 導航到職缺詳情頁 URL。
2. 用 `mcp__browsermcp__browser_snapshot`（必要時搭配 `browser_wait` 等待頁面渲染完成）讀取實際渲染後的頁面內容，確認：
   - 職缺標題與 Remote 地理資格（見上方第 9-10 節分類）
   - 職缺是否仍開放申請（而非顯示已關閉、404、或跳轉到職缺列表首頁）
3. 若該工具不在目前可用工具清單中，先用 ToolSearch 以 `select:mcp__browsermcp__browser_navigate,mcp__browsermcp__browser_snapshot,mcp__browsermcp__browser_wait,mcp__browsermcp__browser_click` 載入。

只有在**用 Browser MCP 實際開啟後仍然無法確認**（例如需要登入才能查看、頁面持續載入失敗、明確顯示職缺已關閉）時，才依照上面的規則視為「無法驗證」，不列入結果。不要因為 WebFetch 讀不到內容就直接放棄，跳過 Browser MCP 這一步。

---

# 8. 每家公司至少使用多組搜尋條件

不要只搜尋一次。

例如：

- `<公司> careers frontend engineer`
- `<公司> careers software engineer`
- `<公司> jobs frontend`
- `<公司> jobs React TypeScript`
- `<公司> jobs senior software engineer`
- `<公司> LinkedIn jobs frontend`
- `<公司> LinkedIn jobs software engineer`

如果發現公司使用：

- Greenhouse
- Lever
- Ashby
- Workable
- SmartRecruiters
- Workday

等 ATS：

也搜尋其官方 ATS。

但是：

**不要假設公司使用哪一個 ATS。**

必須先確認。

---

# 9. Remote 不等於 Global Remote

這是非常重要的判斷規則。

看到：

- Remote
- Remote US
- Remote California
- Remote Europe
- Remote UK
- Remote India

都不能直接判定為全球遠端。

必須判斷職缺允許的地理範圍。

---

# 10. Remote 地理資格分類

每個職缺都必須分類成以下其中一種：

### GLOBAL_REMOTE

明確允許：

- Worldwide
- Global
- Work from anywhere
- Anywhere in the world

或者明確包含 Singapore。

---

### SINGAPORE_ELIGIBLE

職缺明確列出：

Singapore

可以工作。

---

### ASIA_REMOTE

明確允許：

- Asia
- APAC
- Asia-Pacific

但沒有明確確認 Singapore。

---

### REGION_RESTRICTED

Remote 但限制在：

- US
- Americas
- Europe
- UK
- 特定國家

且排除 Singapore。

---

### LOCATION_UNKNOWN

只寫 Remote，但无法确认地理限制。

---

# 11. 遠端職缺優先級

對使用者而言：

1. GLOBAL_REMOTE
2. SINGAPORE_ELIGIBLE
3. ASIA_REMOTE
4. LOCATION_UNKNOWN
5. REGION_RESTRICTED

如果職缺屬於 REGION_RESTRICTED：

**放入推薦清單但要標註。**

---

# 12. 確認職缺目前仍然有效

每個職缺都必須確認：

- Job Title
- Company
- 職缺狀態
- Location
- Remote eligibility
- Department
- Seniority
- Job Description
- Application URL

排除：

- 已關閉
- 已過期
- Archived
- Filled
- 明顯是舊職缺
- 只有舊文章提到
- 只有搜尋引擎快取
- LinkedIn 還有但官方已關閉的職缺

如果官方頁面顯示職缺已關閉：

**即使 LinkedIn 還顯示，也不要列為目前有效職缺。**

---

# 13. LinkedIn 搜尋

LinkedIn 是重要的第二來源，但不能取代官方職缺頁。

搜尋：

- `<公司> Frontend Engineer`
- `<公司> Senior Frontend Engineer`
- `<公司> Software Engineer`
- `<公司> Senior Software Engineer`
- `<公司> Full Stack Engineer`
- `<公司> Staff Frontend Engineer`
- `<公司> Staff Software Engineer`

如果 LinkedIn 職缺有指向官方申請頁：

**優先提供官方申請頁。**

如果只能找到 LinkedIn 的有效職缺：

提供 LinkedIn 職缺連結，並標示：

`來源：LinkedIn`

不要自行產生 LinkedIn URL。

---

# 14. 判斷職缺是否適合使用者

每個目前有效的職缺都要與 source/ 中的使用者背景比較。

至少分析：

## A. Seniority

比較：

- 工作年資
- 職位等級
- 責任範圍
- Ownership
- Architecture
- Leadership
- Mentoring

不要只因使用者工作年資夠久，就認定 Staff / Principal 職缺適合。

必須閱讀 JD 中的實際責任。

---

## B. 技術匹配

將 JD 分成：

### Required

必要條件。

### Preferred

偏好條件。

### Nice-to-have

加分條件。

缺少 Nice-to-have：

**不應大幅扣分。**

缺少核心 Required：

**應大幅扣分。**

---

# 15. 不要只做關鍵字匹配

不要因為 JD 裡出現：

`React + TypeScript + Next.js`

就直接判斷為高度匹配。

必須閱讀實際工作內容。

例如 JD 雖然要求 React：

但實際工作可能主要是：

- Design System
- WebGL
- Graphics
- Mobile
- Developer Relations

這種情況不能只看技術名稱。

反過來：

即使 JD 沒有寫 Next.js，

如果實際工作是：

- React
- TypeScript
- Large-scale Web Application
- Frontend Architecture
- Technical Ownership

仍可能是非常適合使用者的職缺。

---

# 16. Domain Match

評估使用者過去經驗與公司產品的相關程度：

- Developer Tools
- SaaS
- Consumer Products
- Fintech
- Infrastructure
- AI
- E-commerce
- Enterprise Software
- Productivity Software

Domain 不符合：

**不能單獨作為淘汰理由。**

如果工程能力高度匹配，仍然可以推薦。

---

# 17. Scope Match

檢查使用者是否有類似經驗：

- Feature Ownership
- Architecture
- Cross-team Collaboration
- Large-scale Systems
- Performance
- Reliability
- Product Development
- Technical Leadership
- Mentoring

---

# 18. 職缺匹配分數

每個職缺給 0～100 分。

## ⚠️ 每個職缺都必須實際評分，禁止提早分桶

通過前面硬性篩選的職缺，**每一個都必須實際跑完下面五大類的評分**，才能決定要不要列入結果。

嚴禁以下做法：

- 在職缺列表頁（搜尋結果頁）只看標題或摘要，就把職缺歸類成「這是 ML 的」「這是後端的」「這是行動端的」然後直接淘汰。
- 打開 JD 之後，只用來「確認」列表頁時已經下好的判斷，而不是重新評估。
- 用分類取代評分。

列表頁的資訊只能用來**排序閱讀順序**，不能用來淘汰。淘汰只能發生在讀完 JD 的 Required、Preferred、Responsibilities 三段並完成評分之後。

「篩選而非收集」那一節指的是**最終輸出只列值得投的**，不是允許在讀 JD 之前就先砍掉候選。

如果某個職缺最終沒有列入結果，必須能講出它的**實際分數與落榜的具體 Required 項目**，而不是只說「這是某某類型的職缺」。

## 技術匹配：35 分

- Required skills：20
- Preferred skills：10
- Architecture / Engineering experience：5

### ⚠️ 前端契合度分級（先判這一項，再算其他分數）

使用者的核心是前端／全端。**JD 有沒有明講前端，是最強的匹配訊號**，必須先分級，再進行後續評分。

| 級別 | 判準 | 技術匹配調整 |
| ---- | ---- | ------------ |
| **A 級** | MQ **明列** JavaScript / TypeScript / front-end / web，**且** 職責或 Preferred 明確指出工作是 Web 架構／Web 產品 | 技術匹配 **+5**（35 分上限內） |
| **B 級** | MQ 明列 JavaScript / TypeScript / front-end，但職責偏 server-side、ML 或內部工具，不是 Web 產品 | 不調整 |
| **C 級** | MQ **只列後端語言**，僅靠 Responsibilities 的前端描述保留（見下方純後端規則的例外） | 技術匹配 **−5** |
| **D 級** | MQ 只列後端語言，且 Responsibilities 也沒有任何前端字眼 | **直接排除** |

A 級是使用者最想要的形態：公司白紙黑字說「我們接受 JavaScript」而且「這是一個 Web 架構的產品」。這種職缺的錄取現實性與工作內容契合度，都明顯高於「MQ 只寫 Java/C++/Python/Go、要從職責描述去推測有沒有前端」的職缺。

C 級要扣分，是因為「MQ 沒把前端寫進門檻」本身就是風險訊號：recruiter screen 很可能按 MQ 篩人，而且實際前後端比重無法確認。

**排序時，A 級一律排在同分或分數略高的 C 級之前。** 詳見排序那一節。

### ⚠️ 核心技能斷層額外懲罰

如果 Required（最低必要條件）中包含一項「核心技術棧」要求，而使用者在 `source/` 中完全沒有該技術棧的實務經驗（不是弱項，是完全沒用過）：

**Required skills 這一項該子項給 0 分（不是打折），並且從總分再額外扣 15 分。**

但是，**套用這個懲罰之前，必須先判斷 JD 的技術要求屬於「廣泛型」還是「專精型」。只有專精型才觸發懲罰。**

#### 廣泛型：不觸發懲罰

當 Required 列出的是**一串通用程式語言的舉例**時，例如：

- 「software programming in C++, Java, Python or Go」
- 「one or more programming languages (e.g., Python, C, C++, Java, JavaScript)」
- 「back-end such as Java, Python, Golang, or C++ codebases」
- 「one or more general purpose programming languages」

這種寫法——尤其是同時列出 Java / Python / Go / C++ 這種彼此差異很大的語言，或帶有 `such as` / `e.g.` / `one or more` 這類字眼——代表公司要的是**紮實的通用後端與工程能力，而不是某個特定語言**。實務上錄取後照樣要學公司內部的語言與框架。

因此：

- 只要使用者具備**同等級的後端實務經驗**（例如 Node.js / Express / NestJS 寫過正式上線的服務、設計過 API、處理過資料庫），就視為**符合這項 Required**。
- **不觸發 15 分懲罰**，Required 子項也不給 0 分，至多因語言不同而小幅扣分（20 分制下給 14～17 分即可）。
- 在「主要缺口」欄可以註記「後端語言與現職不同（Node.js vs Java/C++）」，但**不得因此把職缺降級或淘汰**。

#### ⚠️ 純後端職缺：直接排除（優先於廣泛型判定）

**廣泛型不扣分的前提，是這個職缺確實含前端／全端成分。**

如果 JD 的技術要求**只提到後端語言** —— 例如 MQ 只寫「software programming in C++, Java, Python or Go」，通篇沒有 JavaScript / TypeScript / HTML / CSS / front-end / web / client 任何一項 —— 代表這是一個**純後端職缺**。

依 `source/ideal-job.md` 的硬性條件（「絕對排除條件：完全不接受『純後端』且『後端語言非 Node.js』的職缺」）：

**直接排除，不列入結果，也不進入評分。**

對照兩種寫法：

- MQ 寫「back-end such as Java, Python, Golang, or C++ codebases, **and front-end experience including JavaScript or TypeScript, HTML, CSS**」→ 這是全端職缺，套用廣泛型，Node.js 視同符合，**保留**。
- MQ 只寫「software programming in C++, Java, Python or Go」→ 純後端職缺，**排除**。

判斷時看的是**整份 MQ 有沒有出現任何前端／全端字眼**，不是只看語言那一行。職稱本身帶有 Server / Backend / Infrastructure / Distributed Systems 字樣時，是額外的佐證。

#### 唯一例外：職責明確寫出前端工作

只有當 Responsibilities **明確**寫出前端／Web UI／client 開發工作時（例如「operating across the stack from backend infrastructure to **frontend mobile and web ecosystems**」「focusing on RPC integration and **UI excellence**」），才視為全端職缺予以保留，並且必須在「主要缺口」欄標註：

> MQ 只列後端語言，前端成分僅見於職責描述，需在面試時確認實際前後端比重。

這是「以實際職責為準」原則的**對稱套用**：職責可以推翻過於寬鬆的 MQ（MQ 寫 JS/TS 但實際做 Flutter → 扣分），同樣也可以推翻過於狹窄的 MQ（MQ 只列後端語言但實際要做 web UI → 保留）。

若 Responsibilities 也沒有任何前端字眼，就是純後端，不得因為 Preferred 提到「full-stack」或「web」就保留 —— Preferred 不是工作內容。

#### 專精型：觸發懲罰

只有當 Required 指定的是**某個特定生態系、且換掉它這份工作的核心內容就會改變**時，才觸發懲罰。例如：

- 「3 years of native Android application development (Java/Kotlin)」
- 「native iOS development (Swift, SwiftUI)」
- 「Experience developing mobile applications using Flutter and Dart」
- 「Unreal Engine / C++ 遊戲引擎開發」
- 「Rust 系統程式開發」
- 「Salesforce Apex」「SAP ABAP」等專屬平台語言

這類要求不是「隨便哪個語言都行」，而是綁定平台或框架本身，使用者完全沒有經驗時才屬於核心技能斷層。

#### 判準三問

不確定屬於哪一型時，依序問：

1. 這串清單是「通用語言的列舉」，還是「指定一個特定生態系」？
2. 把語言換掉，這份工作的核心內容會不會改變？（不會 → 廣泛型；會 → 專精型）
3. 使用者是否具備同層級的工程實務經驗，只是語言不同？（是 → 廣泛型）

三問中只要有兩問指向廣泛型，就**不要**套用懲罰。

#### 以實際職責為準

MQ 寫得寬鬆、但 Responsibilities 顯示主要工作綁定某個專屬技術棧時（例如 MQ 寫 JavaScript/TypeScript，但職責第一條是「Work extensively in a Flutter (Dart) codebase」），**以實際職責為準**，視為專精型並觸發懲罰。

反之，MQ 列了一串後端語言、但職責是一般的全端產品開發時，**維持廣泛型判定，不扣重分**。

#### 其他不適用情況

- Nice-to-have / Preferred 項目（見下方「Preferred 缺口不得作為淘汰理由」）
- 使用者有部分或間接經驗的技能（例如同語系不同版本、同類框架但非同一套）
- 軟性技能（溝通、leadership 等）

這筆懲罰在其他四大類分數加總完成後扣除，可能讓職缺從 🟢 掉到 🟡，甚至掉到 ⚪，必須如實反映在分級與「主要缺口」欄位中，不要因為其他類別分數高就淡化這個缺口。

### ⚠️ Required 領域經驗斷層（非語言類的硬缺口）

核心技能斷層處理的是「語言／框架」。但 Required 也常要求**某個領域的實務年資**，例如：

- 「3 years of experience with ML infrastructure (model deployment, model evaluation, data processing, debugging)」
- 「3 years of experience with speech/audio, reinforcement learning, or specialization in another ML field」
- 「3 years of experience building software for data privacy or security」
- 「5 years of experience in data analysis」「5 years of experience with Python and SQL」
- 「3 years of experience designing, building, and maintaining large-scale data processing systems」

這類要求**不是加分項，是最低門檻**。使用者在 `source/` 中該領域**完全空白**（0 年）時，依年資門檻處理：

| Required 要求年資 | 處理方式 |
| ----------------- | -------- |
| **3 年以上** | **直接排除，不進入評分。** 差距太大，連 recruiter screen 都過不了 |
| **1～2 年**（或未寫年資、只寫 "Experience with…"） | Required 子項給 **0 分**，總分再額外扣 **15 分**（比照專精型斷層） |
| Required 出現 **2 條以上同領域**年資要求 | **一律直接排除**，不論年資多寡 |

#### 關鍵區分：這項要求在 Required 還是 Preferred

這條規則與「Preferred 缺口不得作為淘汰理由」不衝突，兩者的分界就是**該項要求出現在哪一段**：

- ML 只出現在 **Preferred**，Required 只要「2 年任一語言 + 2 年資料結構」→ **正常評分並列入結果**（例如 Wallet Multimodal Intelligence 這種職缺，職責雖然大量談 ML，但門檻沒要求 ML）。
- ML 出現在 **Required**，而且要 3 年、甚至兩條各 3 年 → **這就是一個 ML 職缺**，直接排除，不要因為 Preferred 或職責裡有 agentic flow、prompt engineering 這類使用者擅長的字眼就保留它。

判斷一個職缺「本質上是不是使用者做的那種職缺」，看的是 **Required 要求什麼樣的人**，不是職責段落提到什麼技術。

### ⚠️ Preferred 缺口不得作為淘汰理由

Preferred / Nice-to-have /「加分」欄位裡的任何缺口，**一律只能扣 Preferred skills 那 10 分裡的分數，不得作為淘汰、降級或跳過評分的理由**。

特別注意這個常見錯誤：JD 的 Required 完全沒提某項技術（例如 Machine Learning），只在 Preferred 出現，而 Responsibilities 段落大量描述該技術。這種情況**不構成淘汰理由**——Required 才是門檻，Responsibilities 描述的是團隊在做什麼，不是錄取條件。使用者只要跨得過 Required，就必須正常評分並列入結果，把缺口寫在「主要缺口」欄。

不得自行發明本文件中不存在的淘汰類別（例如「這是 ML 職缺」「這是資料職缺」「領域斷層」）。淘汰理由只有以下五種，其餘一律進入評分：

1. 已投遞過（見前面的資料庫排除規則）
2. EP / 遠端資格有明確反證
3. 地點不符
4. Required 硬性不符（**專精型**核心技能斷層，或年資／Level 明顯不足）
5. 職務性質根本不同（例如 IC 職缺 vs 人事管理職、業務／顧問職）

## Seniority / Scope：20 分

- Level alignment：10
- Responsibility alignment：10

## Remote / Location：20 分

- Global Remote：20
- Singapore 明確可工作：20
- APAC：15
- Location 不明：8
- 排除 Singapore：0

## Experience / Domain：15 分

- 直接相關經驗：10
- Product / Domain 相關：5

## 使用者偏好：10 分

根據 source/ 中的明確偏好評估：

- Code Quality
- Engineering Culture
- Work-life Balance
- Management Quality
- Micromanagement
- 公司規模
- Product Interest

---

# 19. 分數不能取代判斷

分數只是輔助。

不要因為一個職缺是 85 分，就忽略：

- 明確的地點問題
- 明顯的 Seniority 不匹配
- 嚴重的 Required skill 缺口
- 使用者明確不接受的工作條件

如果存在硬性不符合：

可以直接排除，即使總分很高。

---

# 20. 職缺分級

### 🟢 強烈推薦

80～100

代表：

- 背景高度匹配
- 地點可行
- 值得優先投遞

---

### 🟡 值得投

65～79

有一些缺口，但整體仍合理。

---

### ⚪ Stretch

50～64

有明顯差距。

只有在公司或職缺非常有吸引力時才列出。

---

### 🔴 不推薦

低於 50。

不要放入主要結果。

---

# 21. 檢查 JD 的風險訊號

留意：

- 不合理的技能要求
- 要求技術棧過度廣泛
- 職責模糊
- Scope 過大
- IC 工作卻隱含大量管理責任
- 過度出差
- On-call
- 異常工作時間
- 「Fast-paced」搭配大量工作量描述
- 「Wear many hats」但沒有明確職責

不要因為看到單一詞彙就直接判定公司有毒。

只有存在足夠證據才標記為風險。

---

# 22. 公司文化與管理風險

使用者非常重視：

- 程式碼品質
- 績效公平
- 管理能力
- PUA
- 威脅員工
- Micromanagement
- Work-life Balance

因此，如果公司層面的公開資訊已經能提供這些資訊，可以在推薦職缺時納入考量。

但必須區分：

### 已確認的事實

例如：

「Glassdoor 的 Work/Life Balance 評分為 X。」

### 員工評論中反覆出現的趨勢

例如：

「近期多則員工評論反覆提到績效壓力。」

### 無法確認

例如：

「沒有可靠資料證明公司存在 PUA。」

不要把評論推論寫成確定事實。

---

# 23. 職缺重複處理

同一職缺可能同時出現在：

- 官方 Careers
- 官方 ATS
- LinkedIn
- Google Jobs
- 第三方 Job Board

必須去重。

優先順序：

官方職缺頁

> 官方 ATS
>
> LinkedIn
>
> 其他網站

不要把同一職缺列出兩次。

---

# 24. 薪資

如果 JD 有薪資：

必須列出：

- 數字
- 幣別
- Base Salary 或 Total Compensation
- 薪資週期

如果沒有：

寫：

`未揭露`

不要自行估算。

除非使用者另外要求使用 Levels.fyi 等資料估算。

---

# 25. 最終結果格式

先提供：

> 我搜尋了 X 間公司，共找到 Y 個目前仍有效的職缺（已排除 W 個你先前已投遞過的職缺），其中 Z 個值得你投遞。

接著使用表格：

| 匹配度 | 公司 | 職缺 | 地點 / Remote | 為什麼適合 | 主要缺口 | 申請 |
| ------ | ---- | ---- | ------------- | ---------- | -------- | ---- |

「申請」欄必須放：

**實際職缺詳細頁的可點擊連結。**

優先使用官方職缺 URL。

不要只連到公司首頁。

---

# 26. 排序

按照：

1. **前端契合度分級（A > B > C）** —— A 級一律排在 C 級之前，即使 C 級分數高出 5 分以內
2. 匹配分數
3. Remote eligibility
4. Seniority match
5. Technical match

排序。

前端契合度之所以排在分數之前，是因為「MQ 明確接受 JavaScript ＋ 明確是 Web 架構產品」這個組合，對使用者而言是比總分高幾分更重要的訊號：它同時代表錄取現實性高、實際工作內容對得上。

不要因為某家公司名氣比較大，就把它的低匹配職缺排在高匹配職缺前面。

---

# 27. 公司層級摘要

職缺表格後，再按照公司整理：

### Supabase

- 目前符合職缺：X
- 最佳匹配：XXX
- Remote：Global
- 匹配度：XX/100

### DuckDuckGo

- 目前符合職缺：X
- 最佳匹配：XXX
- Remote：Global
- 匹配度：XX/100

如果公司沒有符合職缺：

### Doist

- 目前符合職缺：0
- 狀態：目前沒有適合使用者的公開職缺
- 建議：持續追蹤

---

# 28. 嚴格區分三種狀況

### 沒有找到任何公開職缺

代表目前沒有找到職缺。

---

### 有職缺，但沒有適合使用者的職缺

代表公司正在招聘，但目前職缺與使用者背景不匹配。

---

### 找到適合的職缺

代表至少找到一個值得使用者投遞的職缺。

不要把：

「沒有找到適合的職缺」

寫成：

「這家公司沒有職缺。」

---

# 29. 不要為了湊數量推薦職缺

這個指令的目標是：

**篩選，而不是收集。**

如果搜尋到 30 個職缺，但只有 3 個真的適合：

只列 3 個。

不要把不適合的職缺塞進結果。

---

# 30. 沒有好職缺時要明確說明

例如：

> 我搜尋了 5 間公司，目前找到 14 個公開職缺，但只有 2 個符合你的背景與 Remote 條件。
>
> 其餘職缺主要因為：
>
> - US-only
> - Backend 比重過高
> - Seniority 不符合
> - Required skill 缺口過大
> - 不符合你的 Remote 條件
>
> 因此沒有列入推薦。

---

# 31. 每次重新搜尋都要重新驗證

如果使用者要求：

「再查一次」

「更新」

「有沒有新職缺」

「這些職缺還在嗎」

必須重新搜尋。

不能直接重複之前的結果。

重新確認：

- 舊職缺是否仍然存在
- 是否出現新職缺
- 是否有職缺關閉
- Remote 條件是否改變
- JD 是否改變

---

# 32. 職缺資料必須是最新的

每次搜尋都要知道目前日期。

職缺必須經過目前頁面確認。

如果搜尋結果看起來很新，但實際頁面已經關閉：

**以實際頁面為準。**

不要因為搜尋結果還顯示：

"Apply now"

就認定職缺仍然存在。

---

# 33. URL 規則

每個推薦職缺都必須提供來源。

優先：

1. 官方職缺詳細頁
2. 官方 ATS
3. LinkedIn

不要提供：

- 公司首頁代替職缺頁
- 搜尋結果頁
- 無法確認的 URL
- 自行猜測的 URL

如果無法驗證 URL：

**不要列出該職缺。**

---

# 34. 最終回答風格

使用者需要的是實際求職資訊。

因此：

少講公司背景。

多講：

- 現在有哪些職缺
- 為什麼適合
- 哪裡不符合
- Remote 是否真的可以
- 申請網址

理想結果應該是：

> 「這 3 個值得投。」

而不是：

> 「我找到 27 個職缺。」

---

# 35. 預設公司清單

預設搜尋：

- Supabase
- DuckDuckGo
- Doist
- JFrog
- Buffer
- Zapier
- Toggl
- Help Scout

除非使用者明確要求：

「擴大搜尋」

才搜尋其他公司。

---

# 36. 最重要的原則

始終遵守：

**已投遞過的職缺一律排除**（先查資料庫 `pnpm applied-jobs`，比對後排除，不列入結果）

**新鮮資料 > 舊資料**

**官方職缺頁 > 第三方**

**實際 JD > 關鍵字**

**使用者 source/ > 模型記憶**

**Global Remote 必須驗證 > 猜測**

**職缺匹配度 > 公司名氣**

**少而精確 > 大量低品質結果**
