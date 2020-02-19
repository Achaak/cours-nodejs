let http = require("http")
let url  = require("url")

var server = undefined

exports.start = (_port, _emitter) => {
    server = http.createServer()

    server.on('request', (req, res) => {
        let _pathname = url.parse(req.url, true).pathname
    
        _emitter.emit("root", _pathname, res)
    })

    server.listen(_port)

    return server
}

exports.stop = () => {
    server.close()
}