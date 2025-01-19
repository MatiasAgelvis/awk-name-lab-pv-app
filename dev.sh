#!/bin/bash

case $1 in
  "build")
    docker-compose build
    ;;
  "create")
    docker run --rm -it -v ${PWD}:/app node:latest npm create vite@latest . -- --template svelte
    ;;
  "dev")
    docker-compose up
    ;;
  "install")
    docker run --rm -it -v ${PWD}:/app node:latest npm install
    ;;
  *)
    echo "Available commands: create, install, build, dev"
    ;;
esac
