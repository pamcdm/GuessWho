var expect = require('expect.js');
var GameService = require('../lib/gameService.js');
var Game = require('../lib/game.js');
var Player = require('../lib/player.js');

describe('game service', function () {

  it('is created with the correct dependencies', function(){
    var gameService = GameService.create({'Game':Game,'Player':Player});
    expect(gameService).not.to.be(null);
  });

  it('creates a game with an unique Identification', function () {
    var gameService = GameService.create({'Game':Game,'Player':Player});
    gameService.createGame('uniqueId');
    expect(game).not.to.be(null);
  });
});