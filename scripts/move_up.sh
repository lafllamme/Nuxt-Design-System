#!/bin/sh

# -----------------------------------------------------------------------------
# move_up.sh
# -----------------------------------------------------------------------------
# Description:
#   Moves all files and directories (including hidden ones) from a specified
#   source directory to the current directory and removes the source directory.
#
# Usage:
#   ./move_up.sh source_directory
#
# Example:
#   ./move_up.sh my-nuxt-app
#
# -----------------------------------------------------------------------------

# Function to display usage information
usage() {
    echo "Usage: $0 source_directory"
    echo "Example: $0 my-nuxt-app"
    exit 1
}

# Check if exactly one argument is provided
if [ "$#" -ne 1 ]; then
    echo "Error: Invalid number of arguments."
    usage
fi

SOURCE_DIR="$1"

# Check if the source directory exists and is a directory
if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Directory '$SOURCE_DIR' does not exist."
    exit 1
fi

# Check if the source directory is not empty
if [ -z "$(ls -A "$SOURCE_DIR")" ]; then
    echo "Warning: Directory '$SOURCE_DIR' is already empty."
    # Remove the empty directory
    rm -rf "$SOURCE_DIR"
    echo "Directory '$SOURCE_DIR' has been removed."
    exit 0
fi

# Move non-hidden files and directories
echo "Moving non-hidden files and directories from '$SOURCE_DIR' to the current directory..."
mv "$SOURCE_DIR"/* .

# Move hidden files and directories
echo "Moving hidden files and directories from '$SOURCE_DIR' to the current directory..."
# Using a loop to handle cases where no hidden files exist
for hidden_file in "$SOURCE_DIR"/.[!.]* "$SOURCE_DIR"/..?*; do
    # Check if the glob didn't match any files
    if [ ! -e "$hidden_file" ]; then
        continue
    fi
    mv "$hidden_file" .
done

# Remove the now-empty source directory
echo "Removing the empty directory '$SOURCE_DIR'..."
rm -rf "$SOURCE_DIR"

echo "All contents from '$SOURCE_DIR' have been moved to the current directory."
