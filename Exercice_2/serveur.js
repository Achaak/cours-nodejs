let http = require("http")

let server = http.createServer()

server.on('request', (req, res) => {
    console.log("Hello world !")
})

server.listen(8080)