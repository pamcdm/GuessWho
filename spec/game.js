var expect = require('expect.js');
var Game = require('../lib/game.js');

describe('game', function () {
  it('starts with an empty list of players', function () {
    game = Game.create();
    expect(game.players.length).to.be(0);
  });
});