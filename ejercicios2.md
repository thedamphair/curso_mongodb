## Ejercicio 1
- ¿Que se puede deducir de ejecutar la funcion `explain()`?

  a) Los index disponibles en la colección

  b) Si un ordenamiento fue hecho en memoria o con un index

## Ejercicio 2
- ¿Dado el siguiente query, cual es el indice que cumplirá la regla de **equality, sort,  range**?
```
db.accounts.find( { accountBalance : { $gte : NumberDecimal(100000.00) }, city: "New York" } )
           .sort( { lastName: 1, firstName: 1 } )
```
  a) `{ accountBalance: 1, city: 1, lastName: 1, firstName: 1 }`

  b) `{ lastName: 1, firstName: 1, accountBalance: 1, city: 1 }`

  c) `{ city: 1, lastName: 1, firstName: 1, accountBalance: 1 }`