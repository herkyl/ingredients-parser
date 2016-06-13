const test = require('tape');
const parser = require('../pugjs-generated.js');

test('parses simple ingredient additions', function(t) {
  let result = parser.parse('1 lb potatoes');
  t.deepEqual(result, {
    amount: '1',
    unit: 'lb',
    ingredient: 'potatoes'
  });
  t.end();
});

test('parses ingredient additions with a container', function(t) {
  let result = parser.parse('2 28 oz can tomatoes');
  t.deepEqual(result, {
    amount: '2',
    ingredient: 'can tomatoes',
    container: {
      amount: '28',
      unit: 'oz'
    }
  });
  t.end();
});
