#!/bin/sh

export PGUSER="postgres"

psql -c "CREATE DATABASE client"

psql client -c "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";"