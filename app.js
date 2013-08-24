var express = require('express');
var app = express();

var mockPlayers = [
  {
    realName: 'Gerard',
    fictionalName: 'Leonidas'
  },
  {
    realName: 'John',
    fictionalName: 'Jack Sparrow'
  },
  {
    realName: 'Patrick',
    fictionalName: 'Captain Pickard'
  }
];

app.get('/player/all', function (req, res) {
  res.send(JSON.stringify(mockPlayers));
});

app.get('/player/:id/otherPlayers', function (req, res) {
  res.send(JSON.stringify(mockPlayers));
});

app.post('/player', function (req, res) {
  var name = req.param('name');
  var newPlayer = {realName: name, fictionalName: 'change me'};
  res.send(JSON.stringify(newPlayer));
});

app.listen(3000);
console.log('Listening on port 3000, routes supported:');
console.log('%j\n',app.routes);