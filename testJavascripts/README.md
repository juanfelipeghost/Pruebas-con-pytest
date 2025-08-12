# Prueba con Pytest en Javascripts en lodash 
## crear dependencias
```
>npm init -y
```
## instalar la libreria
```
>npm install lodash jest --save-dev
```
## que es un lodash
es la librería de utilidades para JavaScript que mencionamos antes, que facilita tareas comunes con arrays, objetos y cadenas.
## que es un jest
es un framework de testing para JavaScript que te permite escribir y ejecutar pruebas automáticas de tu código.

## que es exactamente lodash jest 
Cuando dices "Lodash Jest", lo que significa es:

Usar Lodash dentro de tu código para hacer ciertas operaciones.

Usar Jest para crear pruebas automáticas que verifiquen que esas operaciones con Lodash están funcionando correctamente.

En otras palabras:
 Lodash = herramientas para manipular datos.
 Jest = laboratorio para comprobar que tus funciones hacen lo que deberían.

| comando                            | descripción               |
| ---------------------------------- | ------------------------- |
| npm init -y                        | una dependecia            |
| npm install lodash jest --save-dev | instalacion de la libreia |
## **crear un archivo de prueba**
se utiliza un archivo **app.js** para hacer una prueba de pares
### app.js
```
const _ = require('lodash');

function obtenerPares(numeros) {
  return _.filter(numeros, n => n % 2 === 0);
}

module.exports = { obtenerPares };
```
## importante
antes de iniciar el pytest debes de cambiar un texto en **package.json**  cerca del scripts debe colocarse jest para funcionar
ejemplo;
```
"scripts": {
    "test": "jest"
  }
```
## ejecutar Pytest
se utiliza las es siguiente comando npm test