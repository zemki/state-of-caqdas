#!/usr/bin/env node
const path = require('node:path')
const fs = require('node:fs')

const loadCSV = csvPath => {
    const file = fs.readFileSync(path.resolve(csvPath), 'utf8')
    const [header, ...rows] = file
        .split('\n')
        .map(line => line.trim().split(';').map(cell => cell.trim().replaceAll('"', '')))
    return {
        header, rows
    }
}

const collect = (csvPath) => {
    const open = []
    const closed = []
    const csv = loadCSV(csvPath)

    let closedCount = 0
    let openCount = 0
    for (const row of csv.rows) {
        // license is at index 3
        const license = row[3].trim().toLowerCase()
        const isClosed = license === 'proprietary'
        if (isClosed) {
            closedCount++
        } else {
            openCount++
        }
        // import formats are from index 23 to 29
        for (let i = 23; i <= 28; i++) {
            const formats = (row[i] ?? '')
                .split(',')
                .map(line => line.trim().toLowerCase())
                .filter(Boolean)
            if (isClosed) {
                closed.push(...formats)
            } else {
                open.push(...formats)
            }
        }

    }
    console.log(`open: collected ${open.length} entries from ${openCount} tools`)
    console.log(`closed: collected ${closed.length} entries from ${closedCount} tools`)
    return {open, closed}
}

const writeCollected = ({data, name, outPath}) => {
    if (!fs.existsSync(outPath)) {
        fs.mkdirSync(outPath)
    }
    const jsonPath = path.join(outPath, `${name}.json`)
    console.debug(`writing ${name}.json to ${jsonPath}`)
    fs.writeFileSync(jsonPath, JSON.stringify(data), 'utf8')
}


module.exports = {
    collect: (csvPath) => {
        const {open, closed} = collect(csvPath)
        const timestamp = Date.now()
        const outPath = path.join(process.cwd(), `data-${timestamp}`)
        writeCollected({data: open, name: 'open', outPath})
        writeCollected({data: closed, name: 'closed', outPath})
        return outPath
    }
}
