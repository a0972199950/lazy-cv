FROM node:20-slim
# 1. 依然需要的 Lambda Adapter
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.3 /lambda-adapter /opt/extensions/lambda-adapter

# 這裡改成你喜歡的名字
WORKDIR /workdir

# 2. 複製 standalone 內容到 /workdir
COPY .next/standalone ./

# 3. 複製靜態檔案到嵌套的路徑中
# 讓路徑變成 /workdir/public
COPY public ./public
COPY .next/static ./.next/static

# 4. 安裝 Xvfb（虛擬顯示器）+ Playwright Chromium 及其系統依賴
RUN apt-get update && \
  apt-get install -y --no-install-recommends xvfb && \
  npx playwright install --with-deps chromium && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

# 環境變數設定
ENV NODE_ENV=production
ENV PORT=3000
ENV AWS_LWA_PORT=3000

# 5. 使用 xvfb-run 提供虛擬顯示器，讓 headless: false 的 Chromium 正常執行
CMD ["xvfb-run", "--auto-servernum", "--server-args=-screen 0 1920x1080x24", "node", "server.js"]
