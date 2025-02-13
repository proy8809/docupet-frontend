#!/bin/bash

NETWORK=docupet

cp .env.example .env

if ! docker network inspect "${NETWORK}" >/dev/null 2>&1; then
    docker network create --driver bridge ${NETWORK}
fi

docker compose -p docupet-frontend up -d --force-recreate --build