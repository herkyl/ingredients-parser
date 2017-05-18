"use strict";
const test = require('tape');
const parser = require('../pegjs-generated.js');
const parse = parser.parse;

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

test('parses words as numbers', function (t) {
  t.equal(parse('one potato').amount, 'one');
  t.equal(parse('Two potato').amount, 'Two');
  t.equal(parse('THREE potato').amount, 'THREE');
  t.equal(parse('four potato').amount, 'four');
  t.equal(parse('five potato').amount, 'five');
  t.equal(parse('six potato').amount, 'six');
  t.equal(parse('seven potato').amount, 'seven');
  t.equal(parse('eight potato').amount, 'eight');
  t.equal(parse('nine potato').amount, 'nine');
  t.equal(parse('ten potato').amount, 'ten');
  t.equal(parse('eleven potato').amount, 'eleven');
  t.equal(parse('twelve potato').amount, 'twelve');
  t.end();
});

test('parses few', function (t) {
  t.equal(parse('a few cherries').amount, 'a few');
  t.equal(parse('a Few cherries').amount, 'a Few');
  t.equal(parse('an few cherries').amount, 'an few');
  t.equal(parse('few cherries').amount, 'few');
  t.end();
});

test('parses couple', function (t) {
  t.equal(parse('couple cherries').amount, 'couple');
  t.equal(parse('a Couple cherries').amount, 'a Couple');
  t.equal(parse('a couple of cherries').amount, 'a couple');
  t.end();
});
