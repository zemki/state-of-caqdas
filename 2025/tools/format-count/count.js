#!/usr/bin/env node
const path = require('node:path')
const fs = require('node:fs')

const loadJson = jsonPath => {
    return JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
}

const loadCounts = (inPath) => {
    const openList = loadJson(path.join(inPath, 'open.json'))
    const closedList = loadJson(path.join(inPath, 'closed.json'))
    const counts = {}

    openList.forEach(name => {
        if (!counts[name]) {
            counts[name] = {open: 0, closed: 0}
        }
        counts[name].open++
    })

    closedList.forEach(name => {
        if (!counts[name]) {
            counts[name] = {open: 0, closed: 0}
        }
        counts[name].closed++
    })
    return counts
}


const writeCounts = (counts, outPath) => {
    let out = 'format;open;closed;all\n'

    Object
        .entries(counts)
        .sort((a, b) => {
            const aCount = a[1].open + a[1].closed
            const bCount = b[1].open + b[1].closed
            return bCount - aCount
        })
        .forEach(([key, {open, closed}]) => {
            out += `${key};${open};${closed};${open + closed}\n`
        })

    const csvPath = path.join(outPath, `formats-counts.csv`)
    console.log('write counts to', csvPath)
    fs.writeFileSync(csvPath, out, 'utf8')
}

module.exports = {
    count: (dataPath) => {
        const counts = loadCounts(dataPath)
        writeCounts(counts, dataPath)
    }
}
