const EventEmitter = require('events')

let emitter = new EventEmitter()

emitter.on('call', (/*a, b*/) => {
    console.log("On me parle !")
    //console.log("On me parle !", a, b)
})

emitter.emit("call"/*, "a", "b"*/)