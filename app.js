var express = require('express');
var app = express();
app.use(express.logger());

var allowCrossDomain = function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.configure(function(){
  app.use(allowCrossDomain);
});

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

// newPlayer.realName = 'Monkey';
// newPlayer.fictionalName = 'Magid';
// gameService.savePlayerInGame(gameId,newPlayer);

app.get('/player/all', function (req, res) {
  res.json(gameService.playersInGame(gameId));
});

app.post('/player', function (req, res) {
  var newPlayer = Player.create();
  newPlayer.realName = req.param('realName');
  newPlayer.fictionalName = req.param('fictionalName');
  var response = {success : true};
  gameService.savePlayerInGame(gameId,newPlayer);
  res.json(response);
});

app.listen(3000);
console.log('Listening on port 3000\n routes supported:');
console.log('%j\n',app.routes);