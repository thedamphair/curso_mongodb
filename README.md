# Curso de MongoDB
 Este proyecto está enfocado unicamente al uso del driver de MongoDB para NodeJS.
 
 Para este proyecto sólo deberas usar la carpeta `data` creando los queries cuando se te indique, 
las pruebas unitarias deberán de ser exitosas con cada query que vayas realizando correctamente.
## Preparando el ambiente
## Crear una base de datos local
- Crea una conexión local con el comando `mongod`
- Importa los datos de la carpeta `dump/` a tu base de datos local con el comando `mongorestore`
- Conectate a la base de datos local para validar que la base de datos se creó correctamente con los siguientes comandos:
```
  > show dbs
  > use test
  > show collections
  > db.people.findOne()
```
## Instalando las dependecias
- Para instalar las dependencias ejecuta el comando:
```
npm i
```
