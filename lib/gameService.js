var create = function (dependencies){

  return {
    games: [],
    findGameById: function (id) {
      this.games.forEach(function (game){
        myGame = null;
        if (game.id === id) {
          myGame = game;
        }
      });
      return myGame;
    },
    createGame: function (id) {
      var newGame = dependencies.Game.create(id);
      this.games.push(newGame);
      return newGame;
    },
    createPlayerInGame: function (gameName, name) {
      var game = this.findGameById(gameName);
      var player = dependencies.Player.create(name);
      game.addPlayer(player);
    },
    playersInGame: function (id) {
      return game.players;
    }
  };
};

exports.create = create;