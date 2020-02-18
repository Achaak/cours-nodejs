let http = require("http")
let fs   = require("fs")

let server = http.createServer()

server.on('request', (req, res) => {
    fs.readFile("./index.html", (err, data) => {
        if(err) {
            res.writeHead(400, {
                "Content-type": 'text/html; charset=utf-8'
            })
    
            res.end("Ce fichier n'existe pas")
        }
        else {
            res.writeHead(200, {
                "Content-type": 'text/html; charset=utf-8'
            })
    
            res.end(data)
        }
    });
})

server.listen(8080)