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

app.get('/player/all', function(req, res){
  res.send(JSON.stringify(mockPlayers));
});

app.get('/player/:id/otherPlayers', function(req, res){
  res.send(JSON.stringify(mockPlayers));
});

app.listen(3000);
console.log('Listening on port 3000, routes supported:');
console.log('%j\n',app.routes);