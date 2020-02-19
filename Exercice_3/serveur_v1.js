let http = require("http")

let server = http.createServer()

server.on('request', (req, res) => {
    // Ajout de l'entête
    res.writeHead(200, {
        "Content-type": 'text/html; charset=utf-8'
    })

    res.end("Hello world !")
})

server.listen(8080)