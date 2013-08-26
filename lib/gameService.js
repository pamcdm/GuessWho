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
      console.log("existingPlayer", existingPlayer)
      if(!existingPlayer) {
        game.addPlayer(player);
      } else {
        existingPlayer.realName = player.realName;
        existingPlayer.fictionalName = player.fictionalName;
      }
    },
    playersInGame: function (gameName) {
      var game = this.findGameById(gameName);
      return game.players;
    }
  };
};

exports.create = create;