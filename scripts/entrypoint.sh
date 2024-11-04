#!/bin/sh

# Change to the app directory
cd /app || exit

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Check if package.json exists
if [ -f package.json ]; then
  echo "package.json found."

  if command_exists pnpm; then
    echo "pnpm is available. Installing dependencies and starting the development server..."
    pnpm install
    pnpm run dev
  elif command_exists bun; then
    echo "bun is available. Installing dependencies and starting the development server..."
    bun install
    bun run dev
  else
    echo "Neither pnpm nor bun is available. Exiting."
    exit 1
  fi
else
  echo "No package.json found in /app. Starting a shell to initialize the project..."
  tail -f /dev/null
fi
