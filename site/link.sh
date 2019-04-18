#!/bin/bash

# Helper Script to symlink node_modules in WSL Windos

MODULES_PATH="/mnt/l/node/wf-stuffs/node_modules"

find "$MODULES_PATH" -maxdepth 1  -type d  -exec echo "Linking " {} \; -exec ln -s {} "./node_modules" \;
