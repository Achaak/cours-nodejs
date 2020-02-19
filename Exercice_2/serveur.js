// Importation des modules
let http = require("http")

// Creation du serveur
let server = http.createServer()

// Creation des events
server.on('request', (req, res) => {
    console.log("Hello world !")
})

// Ecoute du port 8080
server.listen(8080)