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
    savePlayerInGame: function (gameName, player) {
      var game = this.findGameById(gameName);
      var existingPlayer = game.findPlayerByRealName(player.realName);
      game.addPlayer(player);
    },
    playersInGame: function (gameName) {
      var game = this.findGameById(gameName);
      return game.players;
    }
  };
};

exports.create = create;