#!/bin/sh

# Define color codes
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RESET='\033[0m'

# Function to print logs in the desired format
log_message() {
  current_date=$(date '+%d-%m-%Y %H:%M:%S') # European date format with seconds
  log_type="$1"
  message="$2"

  echo "${BLUE}[${log_type}]${RESET} | ${YELLOW}(${current_date})${RESET}: $message"
}

# Define the relative path to the target directory
# Must be run from the root of the project
TARGET_DIR="./app"

# Check and delete folders or files
clean_item() {
  item_path="$1"
  item_name="$2"

  if [ -e "$item_path" ]; then
    log_message "Cleaning" "Deleting $item_name...🗑️"
    rm -rf "$item_path"
    log_message "Success" "$item_name deleted successfully! ✅ "
  else
    log_message "Skipping" "$item_name does not exist. Skipping. ⚠️"
  fi
}

log_message "Start" "Cleanup process initiated. 🧹"

# Cleanup node_modules
clean_item "$TARGET_DIR/node_modules" "node_modules"

# Cleanup .nuxt
clean_item "$TARGET_DIR/.nuxt" ".nuxt"

# Cleanup .pnpm-store
clean_item "$TARGET_DIR/.pnpm-store" ".pnpm-store"

# Cleanup .output
clean_item "$TARGET_DIR/.output" ".output"

# Cleanup package-lock.json
clean_item "$TARGET_DIR/package-lock.json" "package-lock.json"

# Cleanup bun.lockb
clean_item "$TARGET_DIR/bun.lockb" "bun.lockb"

# Cleanup pnpm-lock.yaml
clean_item "$TARGET_DIR/pnpm-lock.yaml" "pnpm-lock.yaml"

log_message "Finish" "Cleanup process completed! 🎉"
