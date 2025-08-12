const _ = require('lodash');

function obtenerPares(numeros) {
  return _.filter(numeros, n => n % 2 === 0);
}

module.exports = { obtenerPares };