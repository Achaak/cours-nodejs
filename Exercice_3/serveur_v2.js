let http = require("http")
let fs   = require("fs")

let server = http.createServer()

server.on('request', (req, res) => {

    // Go lire le fichier index.html et lance le callback à la fin
    fs.readFile("./index.html", (err, data) => {
        // Le callback

        // Verification de l'existance de ce fichier
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
    
            // Envoie du fichier index.html
            res.end(data)
        }
    });
})

server.listen(8080)