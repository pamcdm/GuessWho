var expect = require('expect.js');
var GameService = require('../lib/gameService.js');
var Game = require('game.js');
var Player = require('player.js');

describe('game service', function () {

  it('is created with the correct dependencies', function(){
    var gameService = GameService.create({Game, Player});
  });

  it('creates a game with an unique Identification', function () {
    game = gameService.newgame('uniqueId');
    expect(game).not.to.be(null);
  });
});