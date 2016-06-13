const test = require('tape');
const parser = require('../pugjs-generated.js');

test('parses integers', function(t) {
  let result = parser.parse('2 potatoes');
  t.equal(result.amount, '2');
  t.end();
});

test('parses large integers', function(t) {
  let result = parser.parse('12345 potatoes');
  t.equal(result.amount, '12345');
  t.end();
});

test('parses simple fractions', function(t) {
  let result = parser.parse('1/2 potato');
  t.equal(result.amount, '1/2');
  t.end();
});

test('parses mixed numbers', function(t) {
  let result = parser.parse('1 1/2 potatoes');
  t.equal(result.amount, '1 1/2');
  t.end();
});

test('parses decimals', function(t) {
  let result = parser.parse('1.5 potatoes');
  t.equal(result.amount, '1.5');
  t.end();
});

test('parses decimals without leading digits', function(t) {
  let result = parser.parse('.5 potatoes');
  t.equal(result.amount, '.5');
  t.end();
});
