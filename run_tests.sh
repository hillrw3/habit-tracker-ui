#!/usr/bin/env bash

set -e

npm test

pushd ./rspec/
    rspec
popd