#!/usr/bin/env node

const reExtension = require('..')

new reExtension().replace(process.argv[2], process.argv[3], process.argv[4])
