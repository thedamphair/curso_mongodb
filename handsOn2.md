## Ejercicio 1
- Ve al archivo `data/excercise1.ts` y escribe el query que devuelva todas las personas cuyo
apellido y ciudad comiencen con C, selecciona sólo el apellido y la ciudad y ordena con base
a la ciudad de forma ascendente.

## Ejercicio 2
- Ve al archivo `data/excercise3.ts` realice un _aggregation pipeline_ calculando en cuantas peliculas ha participado cada actor y el promedio de `imdb.rating` por cada actor. Queremos obtener a los tres con más filmes y que tengan el genero Romance.

El resultado debe contener los siguientes campos:
```
{ "actor": "First_name Last_name", "numFilms": 1, "average": 1.1 }
```

## Ejercicio 3
- Ve al archivo `data/excercise4.ts` realice un _aggregation pipeline_ obteniendo las personas cuyo apellido comience con S, agrupe por los años en los que nacieron por 2010, 2011 y 2012, incluyendo el total de personas por grupo y el nombre completo, el trabajo y la ciudad en la que vive.

Ejemplo:
```
{
  _id: 2010,
  count: 390,
  people: [{
    full_name: "First Last",
    job: "job",
    city: "City"
  }]
}
```