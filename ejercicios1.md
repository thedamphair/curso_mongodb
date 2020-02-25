- Asegurate de haber realizado la configuración del README antes de comenzar con estos ejercicios.
- Abre una conexión a tu base de datos local.

## Ejercicio 1
- Ejecuta el comando para conocer los indices de la colección de `people` ¿cuantos tiene?

## Ejercicio 2
- Crea un index para optimizar las búsquedas por el campo `ssn`

## Ejercicio 3
- Dado el siguiente index 
```
{ name: 1, emails: 1 }
```
Cuando se inserte el siguiente documento:
```
{
  "name": "Beatrice McBride",
  "age": 26,
  "emails": [
      "puovvid@wamaw.kp",
      "todujufo@zoehed.mh",
      "fakmir@cebfirvot.pm"
  ]
}
```
¿Cuantos registros se van a crear en el index?

## Ejercicio 4
- Dado el siguiente index
```
{ "first_name": 1, "address.state": -1, "address.city": -1, "ssn": 1 }
```

¿Cuales de los siguientes queries lo usaran para filtrar y ordenar?
```
a)  db.people.find({ "first_name": { $gt: "J" } }).sort({ "address.city": -1 })
b)  db.people.find({ "address.city": "West Cindy" }).sort({ "address.city": -1 })
c)  db.people.find({ "address.state": "South Dakota", "first_name": "Jessica" }).sort({ "address.city": -1 })
d)  db.people.find({ "first_name": "Jessica" }).sort({ "address.state": 1, "address.city": 1 })
e)  db.people.find({ "first_name": "Jessica", "address.state": { $lt: "S"} }).sort({ "address.state": 1 })
```
## Ejercicio 5
- ¿Que se puede deducir de ejecutar la funcion `explain()`?

  a) Los index disponibles en la colección

  b) Si un ordenamiento fue hecho en memoria o con un index

## Ejercicio 6
- ¿Dado el siguiente query, cual es el indice que cumplirá la regla de **equality, sort,  range**?
```
db.accounts.find( { accountBalance : { $gte : NumberDecimal(100000.00) }, city: "New York" } )
           .sort( { lastName: 1, firstName: 1 } )
```
  a) `{ accountBalance: 1, city: 1, lastName: 1, firstName: 1 }`

  b) `{ lastName: 1, firstName: 1, accountBalance: 1, city: 1 }`

  c) `{ city: 1, lastName: 1, firstName: 1, accountBalance: 1 }`
