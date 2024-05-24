#!/usr/bin/env bash

npx jest --config='{ "testMatch": ["<rootDir>/*.test.js"] }' --watchAll ${1}
