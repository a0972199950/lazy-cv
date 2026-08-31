---
description: 搜尋新加坡大型科技公司的最新軟體工程職缺（不要求 remote，但必須是新加坡辦公室、且必須提供 Employment Pass (EP) 贊助），讀取 source/ 資料夾中的履歷、工作經歷與求職偏好，分析職缺與使用者背景的匹配程度，篩選出真正值得投遞的職缺並提供可直接申請的連結。
---

# 新加坡科技公司職缺搜尋器

你的任務不是單純列出所有找到的職缺。

你的真正任務是：

> 根據 `source/` 資料夾中的使用者履歷、工作經歷、技術能力與求職偏好，搜尋新加坡大型科技公司「目前仍有效」的職缺，判斷哪些職缺真正適合使用者、且確實會提供 Employment Pass (EP) 贊助，並提供可以直接申請的職缺連結。

核心目標：

**幫使用者從大量職缺中挑出真正值得投遞、而且能合法在新加坡工作的職缺。**

這個指令（`/job:sg`）與 `/job:remote` 的差異：

- 不要求 remote。Onsite / Hybrid / Remote-in-Singapore 都可以接受。
- 職缺必須是新加坡辦公室（新加坡當地職缺），不是「Remote APAC」「Remote Asia」這種模糊地點。
- **新加坡 Employment Pass (EP) 贊助是必要條件。** 這是硬性門檻，不是加分項。

---

# 1. 目標公司

預設目標公司分成兩類：在新加坡設有據點的國際大型科技公司，以及 Glassdoor 整體評分高於 3.7 的中大型科技 / 金融科技公司。

## 1.1 大型科技公司

1. Google
2. Microsoft
3. Amazon (AWS)
4. Apple
5. LinkedIn
6. Salesforce
7. Grab
8. Stripe
9. Meta
10. JPMorgan Chase
11. Visa
12. Mastercard
13. OpenAI
14. GovTech Singapore
15. Open Government Products
16. Ministry of Defence of Singapore
17. HTX
18. Booking.com
19. Coinbase
20. Sea
21. SGX Group
22. Scoot
23. Motional
24. Illumina
25. Renesas Electronics
26. ExxonMobil
27. Qualcomm
28. Aon

## 1.2 Glassdoor 評分 > 3.7 的科技 / Fintech 公司

不要求是超大型公司，中大型的科技 scaleup／fintech（例如 Wise、Revolut 這類公司）也符合這個指令的範圍，但必須通過 Glassdoor 評分門檻：

29. Revolut（Glassdoor 整體評分約 4.1／5，新加坡有辦公室）
30. ServiceNow（Glassdoor 整體評分約 4.0／5，新加坡為 APJ 區域總部之一）
31. Databricks（Glassdoor 整體評分約 4.0～4.2／5，新加坡有辦公室）
32. MongoDB（Glassdoor 整體評分約 4.0／5，新加坡有辦公室）
33. Binance（全球最大加密貨幣交易所，新加坡有辦公室）

這個分類的納入條件：

- Glassdoor 整體評分（Overall rating，滿分 5）必須**高於 3.7**，等於 3.7 不算通過。
- 必須有證據顯示該公司在新加坡有辦公室 / 據點（不需要是純工程據點，但至少要有實際員工與職缺紀錄）。
- 評分會隨時間變動，如果使用者要求「重新檢查名單」或評分明顯已經過時，必須重新搜尋確認目前的 Glassdoor 評分，不要直接沿用上面列的數字。

**明確排除中國公司**，包含但不限於：ByteDance / TikTok、Alibaba、Tencent、Huawei、Shein、Xiaomi、PDD / Temu 等。即使這些公司在新加坡有辦公室，也不要納入搜尋或推薦名單。

Grab 是新加坡本地上市、新加坡總部的公司，不是中國公司，可以正常納入。

除非使用者明確要求擴大或縮小搜尋範圍，否則：

- 不要自行加入其他公司
- 不要因為搜尋結果出現其他公司就擴張目標名單
- 不要自行刪除以上公司
- 不要因為公司知名度不夠「大型」就自行排除，除非使用者要求

如果使用者指定新的公司清單，則以使用者指定的清單為準，但仍然要套用「排除中國公司」與「EP 必須提供」兩個規則，除非使用者明確要求不要套用。

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
- 這是硬性排除規則，優先權等同於（甚至先於）第 10 節的 EP 篩選：一個職缺就算 EP 條件通過、匹配分數很高，只要已經投遞過，一律不出現在最終結果中。
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
- 國籍 / 是否已有新加坡工作簽證或身份（如果 source/ 中有提及）

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

- 是否偏好 Onsite / Hybrid / Remote
- 薪資
- Seniority
- Frontend / Full-stack
- 公司規模
- Engineering Culture
- Code Quality
- Work-life Balance
- Management Quality
- 公司產業
- 不想加入的產業

只有 source/ 中有明確依據的偏好才能使用。

不要自行捏造使用者偏好。

**這個指令不強求 remote。** 即使 source/ 中出現「希望 remote」的偏好，也不要因此排除新加坡 onsite / hybrid 職缺，只需要在結果中如實標註工作型態，讓使用者自行判斷。

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

**現在還能投的新加坡職缺。**

所以每次都要重新確認。

---

# 7. 職缺搜尋來源優先級

針對每間目標公司，至少搜尋：

1. 公司官方 Careers / Jobs 頁（記得篩選 Location = Singapore）
2. 公司官方職缺詳細頁
3. LinkedIn Jobs（Location 篩選 Singapore）
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

## 抓取不到職缺內容時：先試 Firecrawl，再升級到 Browser MCP

許多公司官網（Google、Microsoft、Apple、Grab 等）的職缺列表頁與詳情頁採用前端 JS 動態渲染，一般的網頁抓取工具（例如 WebFetch）常常只能取得導覽列/頁面外殼，讀不到實際職缺內容，導致明明是有效職缺卻被誤判為「無法驗證」。

**遇到這種情況時，依序嘗試以下兩層工具，不要 WebFetch 讀不到就直接放棄：**

### 第一層：Firecrawl（優先，較快、較省 token）

1. **職缺詳情頁**（單一職缺的完整 JD）：直接用 `firecrawl scrape <職缺 URL>`，通常搭配 `--wait-for 3000`～`6000`（毫秒）讓 JS 渲染完成即可讀到完整內容，不需要模擬互動。
2. **職缺列表 / 搜尋頁**（例如公司 Careers 首頁的搜尋框）：**不要只靠 URL query string 篩選**（例如 `?keywords=` 或 `?q=`）。很多公司的職缺搜尋是純前端 JS 事件驅動，URL 參數不會被讀取，直接 scrape 會拿到「未過濾的全部職缺」而不是篩選後的結果（實測過 Microsoft Careers 就是這樣：`?keywords=Frontend` 完全被忽略，只有實際模擬打字送出搜尋才會過濾）。正確做法是用 `--actions` 模擬真人操作：
   ```
   firecrawl scrape "<職缺列表頁 URL>" \
     --actions-file actions.json \
     -o .firecrawl/<公司>-search-<關鍵字>.md
   ```
   其中 `actions.json` 內容大致為：
   ```json
   [
     {"type": "click", "selector": "input[type='search'], input[placeholder*='Search' i]"},
     {"type": "write", "text": "Singapore Frontend Engineer"},
     {"type": "press", "key": "Enter"},
     {"type": "wait", "milliseconds": 4000}
   ]
   ```
   實際的搜尋框 selector 因網站而異，如果第一次猜的 selector 沒生效（結果數量沒有變化，例如職缺總數還是跟未篩選時一樣），換一個 selector 或改用 `firecrawl-interact` skill 的做法再試一次，不要只試一次就放棄。
3. 篩選結果頁如果有分頁（例如「Page 1 of 3」），需要的話對每一頁的翻頁按鈕重複 actions 流程，或直接對已知的職缺詳情 URL 逐一 scrape。

### 第二層：Browser MCP（Firecrawl 也讀不到，或需要登入 / 更複雜互動時）

只有在 Firecrawl（含 `--actions`）也無法確認職缺內容時，才升級到 Browser MCP（Chrome 擴充功能：https://chromewebstore.google.com/detail/browser-mcp-automate-your/bjfgambnhccakkhmkepdoekmckoijdlc，對應 `mcp__browsermcp__*` 工具）在真實瀏覽器中開啟該職缺頁：

1. 用 `mcp__browsermcp__browser_navigate` 導航到職缺詳情頁 URL。
2. 用 `mcp__browsermcp__browser_snapshot`（必要時搭配 `browser_wait` 等待頁面渲染完成）讀取實際渲染後的頁面內容，確認：
   - 職缺標題與地點（是否為 Singapore）
   - EP / visa sponsorship 相關文字
   - 職缺是否仍開放申請（而非顯示已關閉、404、或跳轉到職缺列表首頁）
3. 若該工具不在目前可用工具清單中，先用 ToolSearch 以 `select:mcp__browsermcp__browser_navigate,mcp__browsermcp__browser_snapshot,mcp__browsermcp__browser_wait,mcp__browsermcp__browser_click` 載入。

只有在**兩層工具都實際試過仍然無法確認**（例如需要登入才能查看、頁面持續載入失敗、明確顯示職缺已關閉）時，才視為「無法驗證」，不列入結果。不要跳過任何一層就直接放棄。

---

# 8. 每家公司至少使用多組搜尋條件

不要只搜尋一次。

例如：

- `<公司> careers Singapore software engineer`
- `<公司> careers Singapore frontend engineer`
- `<公司> jobs Singapore React TypeScript`
- `<公司> jobs Singapore senior software engineer`
- `<公司> LinkedIn jobs Singapore software engineer`
- `<公司> Singapore Employment Pass sponsorship`
- `<公司> Singapore visa sponsorship engineer`

如果發現公司使用：

- Greenhouse
- Lever
- Ashby
- Workable
- SmartRecruiters
- Workday

等 ATS：

也搜尋其官方 ATS，並在搜尋時加上 `Singapore` 地點篩選。

但是：

**不要假設公司使用哪一個 ATS。**

必須先確認。

---

# 9. 工作地點：必須是新加坡職缺

這個指令不要求 remote，但要求職缺實際隸屬於「新加坡辦公室 / 新加坡實體」。

每個職缺都必須分類成以下其中一種：

### SINGAPORE_ONSITE

職缺明確標示為新加坡辦公室，需要 Onsite 上班。

### SINGAPORE_HYBRID

職缺明確標示為新加坡辦公室，Hybrid 工作模式。

### SINGAPORE_REMOTE

職缺允許 Remote，但明確限制在新加坡境內（例如 "Remote - Singapore"）。

### APAC_OR_ASIA_REMOTE_INCLUDES_SG

職缺是「Remote APAC」或「Remote Asia」，且職缺內容或公司政策明確確認新加坡可申請（例如列出 Singapore 為合格地點之一）。

### LOCATION_UNCLEAR

職缺列出 Singapore 作為地點之一，但無法確認確切工作模式。

**不屬於以上任何一種（例如職缺明確只開放給 US / Europe / UK，完全沒有 Singapore）的職缺，直接排除，不列入結果。**

---

# 10. 新加坡 Employment Pass (EP) 是必要條件

這是這個指令最重要、也是最容易被忽略的規則。

**沒有 EP 贊助的職缺，即使其他條件完全符合，也必須直接排除，不列入任何結果或分數。**

## 10.1 判斷方式

針對每個候選職缺，尋找以下證據：

### 明確會提供 EP / Work Visa 贊助（保留）

JD 或公司頁面出現類似陳述：

- "We sponsor Employment Passes"
- "Visa sponsorship available"
- "We provide relocation and visa support"
- "Open to candidates requiring work pass sponsorship"
- 公司在新加坡的招募頁面公開說明會協助外籍員工申請 EP

### 明確不提供 EP / 需要已有工作權（排除）

JD 或公司頁面出現類似陳述：

- "Candidates must already possess a valid Singapore work pass"
- "Only open to Singapore Citizens / PR"
- "We are unable to provide visa sponsorship for this role"
- "Applicants must have existing right to work in Singapore"

**只要看到上述任何一種明確排除證據，該職缺必須直接忽略，不放入結果，也不要放入「Stretch」或「不推薦」清單中湊數，直接跳過。**

### 沒有明確提及 EP（視為會提供）

如果職缺與公司頁面都沒有明確提到 visa / work pass 相關限制：

**預設當作該公司會提供 EP 贊助，正常列入評估。**

不要因為 JD 沒寫就自行假設不提供，也不要因此排除職缺。

## 10.2 如何在結果中標註

每個列出的職缺都必須註明 EP 狀態：

- `EP：官方明確提供贊助`
- `EP：未明確提及，預設可申請（建議投遞時再次確認）`

不要把两者混為一談，讓使用者清楚知道證據強度。

## 10.3 公司層級的既有事實可以輔助判斷

Google、Microsoft、Amazon、Apple、LinkedIn、Salesforce、Grab、Stripe、Revolut、ServiceNow、Databricks、MongoDB 這類公司在新加坡的科技類職缺，一般業界慣例是會提供 EP 贊助。如果搜尋不到單一職缺的明確聲明，可以在「未明確提及」的情況下，依照第 10.1 節的「預設會提供」規則處理，不需要因為找不到逐則職缺的聲明就過度保守地排除。

---

# 11. 確認職缺目前仍然有效

每個職缺都必須確認：

- Job Title
- Company
- 職缺狀態
- Location（是否為 Singapore）
- 工作型態（Onsite / Hybrid / Remote-in-SG）
- EP 贊助狀態
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

# 12. LinkedIn 搜尋

LinkedIn 是重要的第二來源，但不能取代官方職缺頁。

搜尋時記得加上 Location = Singapore，例如：

- `<公司> Software Engineer Singapore`
- `<公司> Senior Software Engineer Singapore`
- `<公司> Frontend Engineer Singapore`
- `<公司> Full Stack Engineer Singapore`
- `<公司> Staff Software Engineer Singapore`

如果 LinkedIn 職缺有指向官方申請頁：

**優先提供官方申請頁。**

如果只能找到 LinkedIn 的有效職缺：

提供 LinkedIn 職缺連結，並標示：

`來源：LinkedIn`

不要自行產生 LinkedIn URL。

---

# 13. 判斷職缺是否適合使用者

每個「目前有效 + 新加坡職缺 + EP 條件通過」的職缺才需要進入這一步比較。

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

# 14. 不要只做關鍵字匹配

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

# 15. Domain Match

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

# 16. Scope Match

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

# 17. 職缺匹配分數

**先套用第 10 節的 EP 硬性篩選，沒通過的職缺不進入評分。**

每個通過 EP 篩選的職缺再給 0～100 分。

## ⚠️ 每個職缺都必須實際評分，禁止提早分桶

通過 EP 與地點篩選的職缺，**每一個都必須實際跑完下面五大類的評分**，才能決定要不要列入結果。

嚴禁以下做法：

- 在職缺列表頁（搜尋結果頁）只看標題或摘要，就把職缺歸類成「這是 ML 的」「這是後端的」「這是行動端的」然後直接淘汰。
- 打開 JD 之後，只用來「確認」列表頁時已經下好的判斷，而不是重新評估。
- 用分類取代評分。

列表頁的資訊只能用來**排序閱讀順序**，不能用來淘汰。淘汰只能發生在讀完 JD 的 Required、Preferred、Responsibilities 三段並完成評分之後。

第 28 節的「篩選而非收集」指的是**最終輸出只列值得投的**，不是允許在讀 JD 之前就先砍掉候選。

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

## 工作型態符合度：20 分

依照第 9 節分類與使用者在 source/ 中表達的偏好（若有）評估：

- 完全符合使用者偏好（例如使用者偏好 Hybrid，職缺就是 Hybrid）：20
- 部分符合（例如使用者偏好 Remote，職缺是 Hybrid）：12
- 使用者沒有明確表態，職缺本身地點清楚（SINGAPORE_ONSITE / SINGAPORE_HYBRID / SINGAPORE_REMOTE）：15
- LOCATION_UNCLEAR：8

## Experience / Domain：15 分

- 直接相關經驗：10
- Product / Domain 相關：5

## 使用者偏好：10 分

根據 source/ 中的明確偏好評估：

- Code Quality
- Engineering Culture
- Work-life Balance
- Management Quality
- 公司規模
- Product Interest

---

# 18. 分數不能取代判斷

分數只是輔助。

不要因為一個職缺是 85 分，就忽略：

- 明顯的 Seniority 不匹配
- 嚴重的 Required skill 缺口
- 使用者明確不接受的工作條件

如果存在硬性不符合：

可以直接排除，即使總分很高。

EP 不符合的職缺不會走到這一步，因為第 10 節已經先過濾掉。

---

# 19. 職缺分級

### 🟢 強烈推薦

80～100

代表：

- 背景高度匹配
- EP 條件通過
- 值得優先投遞

### 🟡 值得投

65～79

有一些缺口，但整體仍合理。

### ⚪ Stretch

50～64

有明顯差距。

只有在公司或職缺非常有吸引力時才列出。

### 🔴 不推薦

低於 50。

不要放入主要結果。

---

# 20. 檢查 JD 的風險訊號

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

# 21. 公司文化與管理風險

使用者可能重視：

- 程式碼品質
- 績效公平
- 管理能力
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

# 22. 職缺重複處理

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

# 23. 薪資

如果 JD 有薪資：

必須列出：

- 數字
- 幣別（通常是 SGD）
- Base Salary 或 Total Compensation
- 薪資週期

如果沒有：

寫：

`未揭露`

不要自行估算，除非使用者另外要求使用 Levels.fyi 等資料估算。

如果找得到，也可以提醒使用者：新加坡 Employment Pass 目前（2025 年起）科技職位的最低月薪門檻約為 SGD 5,600 起（隨年齡遞增），可作為薪資合理性的參考，但不要把這個數字當作使用者實際會拿到的薪資。

---

# 24. 最終結果格式

先提供：

> 我搜尋了 X 間新加坡的公司，共找到 Y 個目前仍有效的新加坡職缺（已排除 W 個你先前已投遞過的職缺），其中 Z 個確認提供 EP 贊助且值得你投遞。

接著使用表格：

| 匹配度 | 公司 | 職缺 | 地點 / 工作型態 | EP 狀態 | 為什麼適合 | 主要缺口 | 申請 |
| ------ | ---- | ---- | ---------------- | ------- | ---------- | -------- | ---- |

「申請」欄必須放：

**實際職缺詳細頁的可點擊連結。**

優先使用官方職缺 URL。

不要只連到公司首頁。

---

# 25. 排序

按照：

1. **前端契合度分級（A > B > C）** —— A 級一律排在 C 級之前，即使 C 級分數高出 5 分以內
2. 匹配分數
3. EP 證據強度（明確提供 > 未提及、預設提供）
4. Seniority match
5. Technical match

排序。

前端契合度之所以排在分數之前，是因為「MQ 明確接受 JavaScript ＋ 明確是 Web 架構產品」這個組合，對使用者而言是比總分高幾分更重要的訊號：它同時代表錄取現實性高、實際工作內容對得上。

不要因為某家公司名氣比較大，就把它的低匹配職缺排在高匹配職缺前面。

---

# 26. 公司層級摘要

職缺表格後，再按照公司整理：

### Google

- 目前符合職缺：X
- 最佳匹配：XXX
- 地點：Singapore（Onsite / Hybrid）
- EP：官方明確提供 / 未明確提及但預設提供
- 匹配度：XX/100

如果公司沒有符合職缺：

### Stripe

- 目前符合職缺：0
- 狀態：目前沒有適合使用者的公開新加坡職缺
- 建議：持續追蹤

---

# 27. 嚴格區分三種狀況

### 沒有找到任何公開新加坡職缺

代表目前沒有找到職缺。

### 有新加坡職缺，但沒有適合使用者的職缺

代表公司正在招聘，但目前職缺與使用者背景不匹配，或 EP 條件不通過。

### 找到適合的職缺

代表至少找到一個值得使用者投遞、且 EP 條件通過的職缺。

不要把：

「沒有找到適合的職缺」

寫成：

「這家公司沒有職缺。」

也不要把「因 EP 不符合而被排除」跟「Seniority / 技能不符合而被排除」混在一起講，兩者要分開說明。

---

# 28. 不要為了湊數量推薦職缺

這個指令的目標是：

**篩選，而不是收集。**

如果搜尋到 30 個新加坡職缺，但扣除 EP 不符合、地點不符合、背景不符合後只剩 3 個：

只列 3 個。

不要把不適合或 EP 不符合的職缺塞進結果。

---

# 29. 沒有好職缺時要明確說明

例如：

> 我搜尋了 6 間公司，目前找到 18 個新加坡的公開職缺，但其中 5 個明確排除外籍人士 / 不提供 EP 贊助，另外 6 個 Seniority 或技能不符合，最後只有 3 個符合你的背景、且確認會提供 EP。
>
> 其餘職缺主要因為：
>
> - 明確要求已持有新加坡工作權
> - Backend 比重過高
> - Seniority 不符合
> - Required skill 缺口過大
>
> 因此沒有列入推薦。

---

# 30. 每次重新搜尋都要重新驗證

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
- EP 贊助狀態是否有新資訊
- JD 是否改變

---

# 31. URL 規則

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

# 32. 最終回答風格

使用者需要的是實際求職資訊。

因此：

少講公司背景。

多講：

- 現在有哪些新加坡職缺
- 為什麼適合
- 哪裡不符合
- EP 是否真的會提供
- 申請網址

理想結果應該是：

> 「這 3 個值得投，而且都會提供 EP。」

而不是：

> 「我找到 27 個職缺。」

---

# 33. 最重要的原則

始終遵守：

**已投遞過的職缺一律排除**（先查資料庫 `pnpm applied-jobs`，比對後排除，不列入結果）

**EP 必須提供 > 其他一切條件**（有明確反證就直接排除，不猶豫）

**不確定 EP 時，預設會提供，不要過度保守排除**

**新鮮資料 > 舊資料**

**官方職缺頁 > 第三方**

**實際 JD > 關鍵字**

**使用者 source/ > 模型記憶**

**新加坡職缺地點必須驗證 > 猜測**

**不強求 remote，但必須是新加坡辦公室的職缺**

**排除中國公司，即使它們在新加坡有辦公室**

**職缺匹配度 > 公司名氣**

**少而精確 > 大量低品質結果**
