let http = require("http")
let url = require("url")

let server = http.createServer()

server.on('request', (req, res) => {
    res.writeHead(200, {
        "Content-type": 'text/html; charset=utf-8'
    })

    // Parse de l'url et recuperation des paramètres d'url
    let query = url.parse(req.url, true).query

    if(query.name === undefined)
        res.write("Bonjour inconnu")
    else
        res.write("Bonjour " + query.name)

    res.end()
})

server.listen(8080)