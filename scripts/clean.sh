#!/bin/bash

# Define the relative path to the target directory
# Needs to be run from the root of the project !
TARGET_DIR="./app"

# Delete node_modules folder if it exists in the target directory
if [ -d "$TARGET_DIR/node_modules" ]; then
  echo "Deleting node_modules in $TARGET_DIR..."
  rm -rf "$TARGET_DIR/node_modules"
else
  echo "node_modules folder does not exist in $TARGET_DIR."
fi

# Delete .nuxt folder if it exists in the target directory
if [ -d "$TARGET_DIR/.nuxt" ]; then
  echo "Deleting .nuxt in $TARGET_DIR..."
  rm -rf "$TARGET_DIR/.nuxt"
else
  echo ".nuxt folder does not exist in $TARGET_DIR."
fi

# Delete .pnpm-store folder if it exists in the target directory
if [ -d "$TARGET_DIR/.pnpm-store" ]; then
  echo "Deleting .pnpm-store in $TARGET_DIR..."
  rm -rf "$TARGET_DIR/.pnpm-store"
else
  echo ".pnpm-store folder does not exist in $TARGET_DIR."
fi

# Delete .output folder if it exists in the target directory
if [ -d "$TARGET_DIR/.output" ]; then
  echo "Deleting .output in $TARGET_DIR..."
  rm -rf "$TARGET_DIR/.output"
else
  echo ".output folder does not exist in $TARGET_DIR."
fi

# Delete package-lock.json file if it exists in the target directory
if [ -f "package-lock.json" ]; then
  echo "Deleting package-lock.json in $TARGET_DIR..."
  rm -f "package-lock.json"
else
  echo "package-lock.json does not exist in $TARGET_DIR."
fi

# Delete bun.lockb file if it exists in the target directory
if [ -f "bun.lockb" ]; then
  echo "Deleting bun.lockb in root..."
  rm -f "bun.lockb"
else
  echo "bun.lockb does not exist in root."
fi

# Delete pnpm-lock.yaml file if it exists in the target directory
if [ -f "pnpm-lock.yaml" ]; then
  echo "Deleting pnpm-lock.yaml in root..."
  rm -f "pnpm-lock.yaml"
else
  echo "pnpm-lock.yaml does not exist in root."
fi

echo "Folders and lock files deleted successfully."
