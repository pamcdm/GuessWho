var express = require('express');
var app = express();
app.use(express.logger());

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

var gameId = 'uniqueGame';
var Game = require('./lib/Game.js');
var Player = require('./lib/Player.js');
var GameService = require('./lib/GameService.js');

var gameService = GameService.create({Game:Game,Player:Player});
var game = gameService.createGame(gameId);
var newPlayer = Player.create();

newPlayer.realName = 'Monkey';
newPlayer.fictionalName = 'Magid';
gameService.savePlayerInGame(gameId,newPlayer);

app.get('/player/all', function (req, res) {
  res.send(JSON.stringify(gameService.playersInGame(gameId)));
});

app.get('/player/:id/otherPlayers', function (req, res) {
  res.send(JSON.stringify(mockPlayers));
});

app.post('/player', function (req, res) {
  var realName = req.param('realName');
  var fictionalName = req.param('fictionalName');
  var response = {success : true};
  gameService.savePlayerInGame(gameId,player);
  res.send(JSON.stringify(response));
});

app.listen(3000);
console.log('Listening on port 3000\n routes supported:');
console.log('%j\n',app.routes);