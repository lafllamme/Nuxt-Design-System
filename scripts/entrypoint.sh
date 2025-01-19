#!/bin/sh

# Define color codes
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RESET='\033[0m'

# Function to print logs in the desired format
log_message() {
  #entry="$1"
  message="$2"
  date=$(date '+%Y-%m-%d %H:%M:%S')

  echo  "${BLUE}[Entrypoint]${RESET} | ${YELLOW}(${date})${RESET}: $message"
}

# Use SKIP_UPDATE from environment variables (default to false if not set)
SKIP_UPDATE=${SKIP_UPDATE:-false}

# Change to the app directory
cd /app || exit

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Check if package.json exists
if [ -f package.json ]; then
  log_message "package.json check" "package.json found."

  if command_exists pnpm; then
    log_message "pnpm" "(PNPM) is available. Installing dependencies and starting the development server..."
    pnpm i

    if [ "$SKIP_UPDATE" = "false" ]; then
      log_message "pnpm" "(PNPM) Updating dependencies..."
      corepack prepare pnpm@latest --activate
      pnpm update
      log_message "pnpm" "(PNPM) Upgrading dependencies..."
      pnpm upgrade
    else
      log_message "pnpm" "(PNPM) Skipping dependency update and upgrade..."
    fi

    log_message "pnpm" "Finally! Starting Development Server..."
    VITE_CJS_IGNORE_WARNING=1 pnpm run dev
  elif command_exists bun; then
    log_message "bun" "bun is available. Installing dependencies and starting the development server..."
    bun i
    bun run dev
  else
    log_message "error" "Neither pnpm nor bun is available. Exiting."
    exit 1
  fi
else
  log_message "error" "No package.json found in /app. Starting a shell to initialize the project..."
  tail -f /dev/null
fi
