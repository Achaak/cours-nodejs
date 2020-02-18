let http = require("http")
let url  = require("url")
let fs   = require("fs")

let server = http.createServer()

server.on('request', (req, res) => {
    let query = url.parse(req.url, true).query
    let name = query.name === undefined ? "inconnu" : query.name

    fs.readFile("./index.html", "utf8", (err, data) => {
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

            data = data.replace("{{ name }}", name)
    
            res.end(data)
        }
    });
})

server.listen(8080)