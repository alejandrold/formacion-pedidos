var users = require('./data/users.json');
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/menus', function(req, res) {
    const start = parseInt(req.query.start);
    const limit = parseInt(req.query.limit);
  
    let getRestaurantMenu = function(i){
      return {
        "id" : i,
        "name" : "Restaurante " + i,
        "phone" : "12345678" + i,
        "menu" : [
            {
                "key" : "primeros",
                "items" : ["Plato 1." + i, "Plato 2." + i , "Plato 3." + i] 
            },
            {
                "key" : "segundos",
                "items" : ["Plato 1b." + i, "Plato 2b." + i, "Plato 3b." + i] 
            }
        ],
        "onlineEnabled" : i % 2 == 0
      }
    };
  
    let menus = [];
    for(let i = start; i < limit; i++){
      menus.push(getRestaurantMenu(i));
    }
  
    setTimeout(function(){
      res.send(JSON.stringify({
        start,
        limit,
        count : 30,
        results : menus
      }));
    }, 3000);
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