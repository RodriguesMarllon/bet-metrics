# ---- Stage 1: Build ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run dist

# ---- Stage 2: Development ----
FROM builder AS development
WORKDIR /app
CMD ["npm", "run", "start:watch"]

# ---- 3: Production ----
FROM builder AS production
WORKDIR /app
RUN npm install --omit=dev
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/data ./src/data
EXPOSE 3333
CMD ["node", "dist/server.js"]