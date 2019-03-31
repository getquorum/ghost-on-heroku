#!/bin/bash

echo "Starting Docker Environment"

echo "Building Configuration Files"
./bin/create-config

echo "Starting Application"
npm run dev