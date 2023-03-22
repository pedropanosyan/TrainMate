#!/usr/bin/env bash

java -cp ../lib/hsqldb.jar org.hsqldb.server.Server --database.0 file:../db/mydb --dbname.0 xdb