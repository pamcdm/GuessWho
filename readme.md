This is an awesome game you can play with your friends at home, at a bar, at the park, everywhere! Just try to figure out who your are !

Documentation will be added as we see fit.

What to expect from the calls to the service
=============================================
gets:
---------

/players: returns all the people
```json
[
	person: {
	  realName: 'Gerard'
	  fictionalName: 'Leonidas'
	},
	person: {
	  realName: 'John'
	  fictionalName: 'Jack Sparrow'
	},
	person: {
	  realName: 'Patrick'
	  fictionalName: 'Captain Pickard'
	}
]

/playersExcluding/{playerName}: returns all the people except for the one requesting it
```json
[
	person: {
	  realName: 'Gerard'
	  fictionalName: 'Leonidas'
	},
	person: {
	  realName: 'John'
	  fictionalName: 'Jack Sparrow'
	},
	person: {
	  realName: 'Patrick'
	  fictionalName: 'Captain Pickard'
	}
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
