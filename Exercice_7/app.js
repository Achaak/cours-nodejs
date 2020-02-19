var express = require('express');

var app = express();

app.get('/:firstname/:lastname', function(req, res) {
    // Rendu de la page avec ejs
    res.render('./index.ejs', {
        firstname: req.params.firstname,
        lastname: req.params.lastname,
    });
});

app.listen(8080);