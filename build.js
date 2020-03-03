const fs = require('fs')
const execSync = require('child_process').execSync
const version = require('./package.json').version

const bookmarklet = execSync(
  'npx bookmarklet konnnyaku.js', {encoding: 'utf-8'}
  ).trim()

const html = fs
  .readFileSync('./index.html', {encoding:'utf-8'})
  .replace(/<!-- Bookmarklet Start -->[\s\S]*?<!-- Bookmarklet End -->/g,
    `<!-- Bookmarklet Start -->  
<a href='${bookmarklet}'>蒟蒻v${version}</a>
<!-- Bookmarklet End -->`)

fs.writeFileSync('./index.html', html)