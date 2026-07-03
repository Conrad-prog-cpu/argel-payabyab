#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
echo "Starting Cut to Silence website..."
if [ ! -d node_modules ]; then
  npm install
fi
npm run dev
