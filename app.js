var express = require('express');
var app = express();

var mockPLayers = [
  {
    realName: 'Gerard',
    fictionalName: 'Leonidas'
  },
  {
    realName: 'John',
    fictionalName: 'Jack Sparrow'
  },
  {
    realName: 'Patrick',
    fictionalName: 'Captain Pickard'
  }
];

app.players('/players', function(req, res){
  res.send(JSON.stringify(mockPlayers));
});

app.players('/players/except/:playerName', function(req, res){
  res.send(JSON.stringify(mockPlayers));
});

app.listen(3000);
console.log('Listening on port 3000');