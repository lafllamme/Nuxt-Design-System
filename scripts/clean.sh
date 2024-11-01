#!/bin/bash

# Define the relative path to the target directory
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

echo "Folders deleted successfully."
