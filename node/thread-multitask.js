const fs = require('fs')
const crypto = require('crypto')
const https = require('https')

const start = Date.now()

function doHash() {
  crypto.pbkdf2('a', 'b', 200000, 512, 'sha512', () => {
    console.log('HASH:', Date.now() - start)
  })
}

function doRequest() {
  https
    .request('https://www.google.com', res => {
      res.on('data', () => { })
      res.on('end', () => {
        console.log('HTTP:', Date.now() - start)
      })
    })
    .end()
}

function readFile() {
  fs.readFile('./thread-multitask.js', 'utf-8', () => {
    console.log('FS:', Date.now() - start)
  })
}

doRequest()
doHash()
doHash()
doHash()
doHash()
readFile()
