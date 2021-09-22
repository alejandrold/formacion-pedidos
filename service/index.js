var menus = require('./data/menus.json');
var users = require('./data/users.json');
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/menus', function(req, res) {
    res.send(JSON.stringify(menus));
});

app.post('/login', function(req, res) {
    var userInfo = users.filter(user => user.login == req.body.login && user.password == req.body.password);
    if(userInfo.length > 0){
        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        res.end(JSON.stringify(userInfo[0]))

        return;
    }

    res.status(403);
    res.end(null);
})

app.listen(3001, () => {
    console.log('Escuchando en el puerto 3001')
})