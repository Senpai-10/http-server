const http = require('http')
const fs = require('fs')

const port = 8080
const File = 'index.html'

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile(File, function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('File Not Found')
        }
        else {
            res.write(data)
        }
        res.end()
    })
    
})

server.listen(port, function(error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(`Server Is Listening On Port : ${port}`);
        console.log(`? ctrl+c to stop`);
    }
})
