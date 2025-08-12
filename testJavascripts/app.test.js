const { obtenerPares } = require('./app');

test('Debe devolver solo números pares', () => {
  expect(obtenerPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  expect(obtenerPares([7, 9, 11])).toEqual([]);
});