
What to expect from the calls to the service
=============================================
on gets:
---------
/begin : returns the initial page

/everyone: returns all the people
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
/person/realName: retrieves information from a person (finds it based on realName)

on posts:
----------
/person : saves or creates a person in a determined game