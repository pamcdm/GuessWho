var create = function (dependencies){
  return {
    newGame: function (id) {
      return dependencies.Game.create(id);
    }

  };
};

exports.create = create;