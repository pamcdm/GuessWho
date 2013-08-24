This is an awesome game you can play with your friends at home, at a bar, at the park, everywhere! Just try to figure out who your are !

Documentation will be added as we see fit.

What to expect from the calls to the service
=============================================
gets:
---------

/players: returns all the people
```json
[
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
]

/players/except/{playerName}: returns all the people except for the one requesting it
```json
[
  {
    realName: 'Gerard',
    fictionalName: 'Leonidas'
  },
  {
    realName: 'John',
    fictionalName: 'Jack Sparrow'
  },
]
```
/player/{realName}: retrieves information from a person (finds it based on realName)

posts:
----------
/player : saves a player

delete:
-----------
/player : deletes a player
=======
GuessWho
========
