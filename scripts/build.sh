#!/bin/bash

set -e

# Get the .npmrc that will have the auth information for our private registry
npmrc_path=$(npm config get userconfig)
repo_root=$(git rev-parse --show-toplevel)

pushd "${repo_root}/components/portal"

# Temporarily ignore changes to .npmrc
git update-index --assume-unchanged .npmrc

# Get auth information into working directory
echo '\n' >> .npmrc
cat $npmrc_path >> .npmrc

docker build -f docker/Dockerfile . -t uxportal/portal

# Reset the local .npmrc
git checkout .npmrc
git update-index --no-assume-unchanged .npmrc

popd