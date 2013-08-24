var create = function (id) {
  return {
    id: id,
    players : [],
    playerCount : function () {
      return this.players.length;
    },
    addPlayer : function (player) {
      this.players.push(player);
    }
  };
};

exports.create = create;