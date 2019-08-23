const fizzbuzz = require('../fizzbuzz');

test('returns 0', () => {
  expect(fizzbuzz(0)).toBe(0);
});

test('returns 1', () => {
  expect(fizzbuzz(1)).toBe(1);
});