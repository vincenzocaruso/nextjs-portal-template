FROM mcr.microsoft.com/cbl-mariner/base/nodejs:16 AS base

# Dependencies step
FROM base AS deps

RUN echo "node version: $(node -v)" && \
    echo "npm version: $(npm -v)"

# Create app directories:
WORKDIR /app

# Copy package required files:
COPY .npmrc package.json package-lock.json ./

# Install packages:
RUN npm ci --quiet

# Remove .npmrc to avoid leaking secrets
RUN rm -f .npmrc

# Build Step
FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules

# Copy all files in current directory to image:
COPY ./ ./

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build
RUN npm test

# Run Step
FROM base AS runner
WORKDIR /app

# Set production mode:
ENV NODE_ENV production

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
