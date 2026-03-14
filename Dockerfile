FROM node:20-slim

# 複製 Lambda Adapter
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.3 /lambda-adapter /opt/extensions/lambda-adapter

WORKDIR /workdir
COPY .next/standalone ./
COPY public ./public
COPY .next/static ./.next/static

# 安裝必要的系統庫（不需要 xvfb）
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright
RUN apt-get update && \
  npx playwright install-deps chromium && \
  npx playwright install chromium && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
ENV NEXT_DATA_CACHE_DIR=/tmp/.next/cache
ENV PORT=3000
ENV AWS_LWA_PORT=3000
# 啟動時移除 xvfb-run
CMD ["node", "server.js"]