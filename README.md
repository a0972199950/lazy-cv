# Lazy CV

> 結合 AI Agent 與 Next.js，根據職缺描述 (JD) 自動產生客製化雙語履歷網頁的工具。

## 專案簡介

Lazy CV 是一個 **AI 驅動的履歷網頁生成系統**。只需提供一個職缺連結，搭配 GitHub Copilot（或其他 AI Agent）的 `/cv` 指令，系統便會：

1. 透過 Chrome DevTools MCP 自動抓取 JD 內容
2. 以 `/source` 中的個人資料為事實來源
3. 生成針對該職缺客製化的中英文履歷網頁（`page.tsx`）
4. 每份履歷以 UUID 為路由，互不干擾

所有履歷內容**硬編碼**在各自的 `page.tsx` 中，無外部元件依賴，可直接瀏覽器列印為 PDF。

## 首頁：履歷管理系統

首頁提供一個完整的履歷管理後台，功能包含：

- **搜尋** — 依公司名稱即時篩選履歷記錄
- **複製連結** — 一鍵複製中文版或英文版履歷的公開連結
- **行內編輯** — 直接在表格中修改公司名稱與 JD 連結（支援 Enter 儲存 / Esc 取消）
- **刪除** — 移除不再需要的履歷記錄
- **快速預覽** — 表格內直接點擊連結開啟中英文履歷頁面

每筆記錄顯示公司名稱、JD 連結、中英文履歷連結、建立時間與更新時間。

## 技術棧

| 分類 | 技術 |
|------|------|
| Framework | Next.js 16 (App Router, Standalone output) |
| Language | TypeScript |
| Styling | TailwindCSS 4 |
| Animation | Framer Motion |
| Database | Neon (PostgreSQL) + Drizzle ORM |
| UI Components | shadcn/ui, Radix UI, Lucide Icons, Heroicons |
| Validation | Zod |
| Deployment | Docker → AWS ECR + Lambda + S3 + CloudFront |
| Package Manager | pnpm |

## 專案結構

```
lazy-cv/
├── app/
│   ├── page.tsx                        # 首頁 - 履歷管理列表
│   ├── actions.ts                      # Server Actions (CRUD)
│   ├── layout.tsx                      # 全域 Layout
│   ├── login/                          # 登入頁面
│   └── (download-pdf)/                 # 履歷 Route Group
│       ├── layout.tsx                  # 共用 Layout（含列印/下載 PDF 按鈕）
│       ├── john-hsieh/                 # 預設範本履歷
│       │   ├── en/page.tsx
│       │   └── zh-TW/page.tsx
│       └── {uuid}/                     # AI 自動產生的客製化履歷
│           ├── jd.md                   # 該職缺的 JD 原始內容
│           ├── en/page.tsx             # 英文版履歷
│           └── zh-TW/page.tsx          # 中文版履歷
├── source/                             # 個人資料事實來源（AI 生成履歷的依據）
│   ├── resume-en.md
│   └── resume-zh-TW.md
├── scripts/
│   └── create-cv.ts                    # CLI 腳本：建立新履歷骨架 + DB 記錄
├── components/
│   ├── resume/                         # 履歷相關元件
│   └── ui/                             # shadcn/ui 元件庫
├── lib/
│   └── db/                             # Drizzle ORM + Neon 設定
├── Dockerfile                          # AWS Lambda 容器部署
└── drizzle.config.ts                   # Drizzle Kit 設定
```

## 快速開始

### 環境需求

- Node.js 20+
- pnpm
- PostgreSQL（建議使用 [Neon](https://neon.tech)）

### 安裝

```bash
git clone https://github.com/a0972199950/lazy-cv.git
cd lazy-cv
pnpm install
```

### 環境變數

建立 `.env.local`：

```env
DATABASE_URL=postgresql://...
```

### 資料庫初始化

```bash
pnpm db:push       # 推送 schema 到資料庫
# 或
pnpm db:migrate    # 執行 migration
```

### 開發

```bash
pnpm dev
```

瀏覽 `http://localhost:3000` 查看履歷管理列表。

### 建構 & 部署

```bash
pnpm build
pnpm start
```

Docker 部署（AWS Lambda）：

```bash
docker build -t lazy-cv .
```

## 使用方式

### 方式一：AI Agent `/cv` 指令（推薦）

在 GitHub Copilot Chat 中輸入：

```
/cv [職缺網址]
```

AI Agent 會自動執行以下 SOP：

1. **數據採集** — 透過 Chrome DevTools 抓取公司名稱與 JD 內容
2. **建立骨架** — 執行 `pnpm cv {company} {url}`，產生 UUID 路由與空白檔案
3. **內容生成** — 根據 `/source` 資料與 JD 需求，生成客製化的中英文 `page.tsx`
4. **完成回報** — 回傳 UUID，可直接訪問 `/{uuid}/zh-TW` 或 `/{uuid}/en`

### 方式二：手動建立

```bash
# 建立新履歷骨架（會在 DB 新增記錄並建立目錄結構）
pnpm cv "公司名稱" "https://jd-url.com"
```

執行後會輸出 UUID，接著手動編輯以下檔案：

- `app/(download-pdf)/{uuid}/jd.md` — 貼上 JD 內容
- `app/(download-pdf)/{uuid}/en/page.tsx` — 英文版履歷
- `app/(download-pdf)/{uuid}/zh-TW/page.tsx` — 中文版履歷

### 下載 PDF

開啟任一履歷頁面後，點擊右下角的下載按鈕（觸發瀏覽器列印），即可儲存為 PDF。

## 開發指令

| 指令 | 說明 |
|------|------|
| `pnpm dev` | 啟動開發伺服器 |
| `pnpm build` | 建構生產版本 |
| `pnpm start` | 啟動生產伺服器 |
| `pnpm lint` | ESLint 檢查 |
| `pnpm typecheck` | TypeScript 型別檢查 |
| `pnpm cv [company] [url]` | 建立新履歷骨架 |
| `pnpm db:push` | 推送 Schema 到資料庫 |
| `pnpm db:generate` | 產生 Migration 檔案 |
| `pnpm db:migrate` | 執行資料庫 Migration |
| `pnpm db:studio` | 開啟 Drizzle Studio |

## 部署架構（AWS）

專案透過 GitHub Actions 自動部署至 AWS，推送至 `master` 分支即觸發。CI/CD 流程如下：

```
push master
  │
  ├─ pnpm install & build
  │
  ├─ Docker build (linux/amd64)
  │    └─ 內含 aws-lambda-adapter，讓 Next.js standalone 跑在 Lambda 上
  │
  ├─ Push image → Amazon ECR (lazy-cv)
  │
  ├─ 更新 Lambda function image
  │
  ├─ 同步靜態資產至 S3
  │    ├─ _next/static → immutable cache (1 year)
  │    └─ public → short cache (1 hour)
  │
  └─ 清除 CloudFront cache (/_next/static/*)
```

| AWS 服務 | 用途 |
|----------|------|
| **ECR** | 存放 Docker image |
| **Lambda** | 執行 Next.js standalone server（透過 Lambda Web Adapter） |
| **S3** | 託管 `_next/static` 與 `public` 靜態資產 |
| **CloudFront** | CDN 分發，前置 Lambda 與 S3 |
| **Region** | ap-southeast-1 (Singapore) |

### 📄 許可證
此專案採用 MIT 許可證 - 詳見 [LICENSE](LICENSE) 檔案

---

**🎯 讓每一份履歷都能完美匹配目標職位，大幅提升求職成功率！**
