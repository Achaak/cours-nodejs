var express = require('express');
var session = require('cookie-session');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

app.use(express.static(__dirname + '/public'));

/* On utilise les sessions */
app.use(session({
    secret: 'todotopsecret'
}))


// Gestion de la session
app.use(function(req, res, callback){
    if (typeof(req.session.todolist) == 'undefined') {
        req.session.todolist = [];
    }
    callback();
})

// Affichage de la todolist
app.get('/todo', function(req, res) { 
    res.render('index.ejs', {
        todolist: req.session.todolist
    });
})

// Ajout d'un element
app.post('/todo/ajouter/', urlencodedParser, function(req, res) {
    if (req.body.newtodo != '') {
        req.session.todolist.push(req.body.newtodo);
    }
    res.redirect('/todo');
})

// Suppression d'un element
app.get('/todo/supprimer/:id', function(req, res) {
    if (req.params.id != '') {
        req.session.todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
})

// Si page inexistante, on renvoie vers la todolist
app.use(function(req, res, next){
    res.redirect('/todo');
})

app.listen(8080);