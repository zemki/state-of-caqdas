#!/usr/bin/env node
const path = require('node:path')
const fs = require('node:fs')
const process = require('node:process')
const { collect } = require('./collect')
const { count } = require('./count')

const [, , csvPath] = process.argv
const dataPath = collect(csvPath)
count(dataPath)
