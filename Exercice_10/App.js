const express    = require('express');
const session    = require('cookie-session');
const path       = require('path');
const http       = require('http')
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);

// On utilise les sessions
app.use(session({
    secret: 'SECRETSESSION'
}))

// Lancer le modules de récupération de pseudo
const chat = require("./modules/chat")
chat.start(session, io)

// Chemin pour les ressources
app.use(express.static(path.join(__dirname, 'public')));

// Gestion de la session
app.use(function(req, res, callback){
    if (typeof(req.session.pseudo) == 'undefined') {
        req.session.pseudo = undefined;
    }
    callback();
})

// Affichage de la page de login
app.get('/', function(req, res) { 
    if(req.session.pseudo)
        res.redirect('/chat');
    else
        res.render('login.ejs', {
            pseudo: req.session.pseudo
        })
});

// Affichage de la page du chat
app.get('/chat/', function(req, res) { 
    if(req.session.pseudo)
        res.render('chat.ejs', {
            pseudo: req.session.pseudo
        })
    else
        res.redirect('/');
});


// Ajout d'un element
app.post('/login/', urlencodedParser, function(req, res) {
    if (req.body.pseudo != '') {
        req.session.pseudo = req.body.pseudo;
    }
    res.redirect('/chat');
})

// Si page inexistante, on renvoie vers la todolist
app.use(function(req, res, next){
    res.redirect('/');
})

server.listen(8080);