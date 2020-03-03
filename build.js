const fs = require('fs')
const execSync = require('child_process').execSync
const version = require('./package.json').version

const bookmarklet = execSync(
  'npx bookmarklet konnnyaku.js', {encoding: 'utf-8'}
  ).trim()

const markdown = fs
  .readFileSync('./README.md', {encoding:'utf-8'})
  .replace(/<!-- Bookmarklet Start -->[\s\S]*?<!-- Bookmarklet End -->/g,
    `
<!-- Bookmarklet Start -->  
<a href='${bookmarklet}'>蒟蒻v${version}</a>
<!-- Bookmarklet End -->
`)

fs.writeFileSync('./README.md', markdown)