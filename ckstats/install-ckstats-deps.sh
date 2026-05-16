#!/bin/bash

# CKStats dependency installer for DigiByte instance
# Umbrel‑compatible, pnpm‑safe

CKSTATS_DIR="/you path to/digibyte/ckstats"

echo ">>> Switching to CKStats directory..."
cd "$CKSTATS_DIR" || { echo "Directory not found"; exit 1; }

echo ">>> Installing core dependencies..."
pnpm add \
  axios \
  bs58check \
  bech32 \
  dotenv \
  mysql2 \
  redis \
  chalk \
  commander \
  cron \
  winston

echo ">>> Installing Next.js + React dependencies..."
pnpm add \
  next \
  react \
  react-dom

echo ">>> Installing TypeScript + build tools..."
pnpm add -D \
  typescript \
  ts-node \
  @types/node \
  @types/react \
  @types/react-dom \
  @types/redis \
  @types/commander \
  @types/chalk

echo ">>> Installing CKStats script dependencies..."
pnpm add \
  dayjs \
  uuid \
  lodash

echo ">>> Installing dev tools..."
pnpm add -D \
  eslint \
  prettier

echo ">>> Installing Tailwind + DaisyUI..."
pnpm add -D \
  tailwindcss \
  postcss \
  autoprefixer \
  daisyui

echo ">>> Installing any missing peer dependencies..."
pnpm install

echo ">>> CKStats dependencies installed successfully!"
