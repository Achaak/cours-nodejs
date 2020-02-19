let http = require("http")
let url  = require("url")
let fs   = require("fs")
let EventEmitter = require('events')

let emitter = new EventEmitter()

var App = {
    start: (_port) => {
        var server = http.createServer()

        server.on('request', (req, res) => {
            let _pathname = url.parse(req.url, true).pathname
        
            emitter.emit("root", _pathname, res)
        })

        server.listen(_port)
    }
}

emitter.on('root', (_pathname, _response) => {
    switch (_pathname) {
        case "/page2":
            fs.readFile("./page2.html", "utf8", (err, data) => {
                _response.writeHead(200, {
                    "Content-type": 'text/html; charset=utf-8'
                })
        
                _response.end(data)
            });
            break;
    
        default:
            fs.readFile("./page1.html", "utf8", (err, data) => {
                _response.writeHead(200, {
                    "Content-type": 'text/html; charset=utf-8'
                })
        
                _response.end(data)
            });
            break;
    }
})

App.start(8080)