# Prueba con Pytest en Javascripts en lodash 
## crear dependencias
```
>npm init -y
```
## instalar la libreria
```
>npm install lodash jest --save-dev
```
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