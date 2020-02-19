
let EventEmitter = require('events')

let emitter = new EventEmitter()

let App = require("./modules/app.js")
let Rooter = require("./modules/rooter.js")

App.start(8080, emitter)
Rooter.start(emitter)