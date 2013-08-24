var expect = require('expect.js');
var Player = require('../lib/player.js');

describe('player', function () {

  it('is created with a real name', function () {
    var player = Player.create ('real name');
    expect(player.realName).to.be('real name');
  });

});