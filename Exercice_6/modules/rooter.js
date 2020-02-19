let fs = require("fs")

exports.start = (_emitter) => {
    _emitter.on('root', (_pathname, _response) => {
        
        switch (_pathname) {
            case "/page2":
                fs.readFile("./src/page2.html", "utf8", (err, data) => {
                    _response.writeHead(200, {
                        "Content-type": 'text/html; charset=utf-8'
                    })
            
                    _response.end(data)
                });
                break;
        
            default:
                fs.readFile("./src/page1.html", "utf8", (err, data) => {
                    _response.writeHead(200, {
                        "Content-type": 'text/html; charset=utf-8'
                    })
            
                    _response.end(data)
                });
                break;
        }
        
    })
}