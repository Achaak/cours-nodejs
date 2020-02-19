let http = require("http")
let url  = require("url")
let fs   = require("fs")

let server = http.createServer()

server.on('request', (req, res) => {
    // Gestion du paramètre d'url name
    let query = url.parse(req.url, true).query
    let name = query.name === undefined ? "inconnu" : query.name

    // Ajout du paramètre utf8 pour pouvoir lire le fichier et ne pas ce retrouver avec un Buffer
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

            // Remplace les champs dans le fichier html
            data = data.replace("{{ name }}", name)
    
            res.end(data)
        }
    });
})

server.listen(8080)