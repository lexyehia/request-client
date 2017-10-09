const request = require('request'),
      fs      = require('fs')

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', err => { throw err })
       .on('response', (res) => {
           console.log(`Response Message: ${res.statusMessage} and Content Type: ${res.headers['content-type']}`)
           console.log('Starting download')
       })
       .on('data', () => console.log("Downloading..."))
       .on('end', () => console.log("All done."))
       .pipe(fs.createWriteStream('./future.jpg'))