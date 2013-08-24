var create = function (dependencies){
  return {
    createGame: function (id) {
      return dependencies.Game.create(id);
    }

  };
};

exports.create = create;