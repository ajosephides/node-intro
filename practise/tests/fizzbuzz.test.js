const fizzbuzz = require('../fizzbuzz');

test('returns 1', () => {
  expect(fizzbuzz(1)).toBe(1);
});

test('returns 2', () => {
  expect(fizzbuzz(2)).toBe(2);
});

test('multiple of 3 returns "Fizz"', () => {
  expect(fizzbuzz(3)).toBe('Fizz');
});

test('multiple of 3 returns "Fizz"', () => {
  expect(fizzbuzz(6)).toBe('Fizz');
});