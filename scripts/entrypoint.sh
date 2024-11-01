#!/bin/sh

# Check if package.json exists
if [ -f package.json ]; then
  echo "package.json found. Installing dependencies and starting the development server..."
  bun install
  bun run dev
else
  echo "No package.json found. Starting a shell to initialize the project..."
  tail -f /dev/null
fi
