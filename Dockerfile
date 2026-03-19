FROM node:20-alpine AS base
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@8 --activate

# Prisma and some native Next.js dependencies require these runtime libs.
RUN apk add --no-cache libc6-compat openssl

ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
COPY package.json pnpm-lock.yaml* ./
COPY prisma ./prisma
RUN pnpm install --frozen-lockfile --prod=false

FROM deps AS development
COPY . .
EXPOSE 3000
CMD ["pnpm", "run", "dev", "--", "--hostname", "0.0.0.0"]

FROM base AS builder
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# 1. Create the non-root user and group
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# 2. Copy the standalone build (Output of Next.js output: 'standalone')
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

# 3. Create cache directories and set strict permissions for the non-root user
RUN mkdir -p .next/cache && chown -R nextjs:nodejs .next/cache \
    && mkdir -p /tmp && chown -R nextjs:nodejs /tmp

# 4. Drop privileges to the non-root user
USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
