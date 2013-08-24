var create = function (id) {
  return {
    id: id,
    players : [],
    playerCount : function () {
      return this.players.length;
    },
    addPlayer : function (player) {
      this.players.push(player);
    },
    findPlayerByRealName: function (realName) {
      this.players.forEach(function (player) {
        if(player.realName === realName) {
          return player;
        }
      });
      return null;
    }
  };
};

exports.create = create;