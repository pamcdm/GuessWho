var express = require('express');
var app = express();
app.use(express.logger());

var Game = require('./lib/Game.js');
var Player = require('./lib/Player.js');
var GameService = require('./lib/GameService.js');


var gameService = GameService.create({Game:Game,Player:Player});
var game = gameService.createGame('uniqueGame');

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