const test = require('tape');
const parser = require('../pegjs-generated.js');
const parse = parser.parse;

test("doesn't parse a unit when there is none", function(t) {
  t.equal(parse('2 coconuts').unit, undefined);
  t.equal(parse('2 cupcakes').unit, undefined);
  t.end();
});

test("parses unit when nothing follows it", function(t) {
  t.equal(parse('1 lb').unit, 'lb');
  t.equal(parse('1 cup').unit, 'cup');
  t.end();
});

test("parses cups", function(t) {
  t.equal(parse('2 cups flour').unit, 'cups');
  t.equal(parse('2 CUPS flour').unit, 'CUPS');
  t.equal(parse('2 Cups flour').unit, 'Cups');
  t.equal(parse('2 cup flour').unit, 'cup');
  t.equal(parse('2 c. flour').unit, 'c.');
  t.equal(parse('2 c flour').unit, 'c');
  t.end();
});

test("parses cups", function(t) {
  t.equal(parse('2 cups flour').unit, 'cups');
  t.equal(parse('2 CUPS flour').unit, 'CUPS');
  t.equal(parse('2 Cups flour').unit, 'Cups');
  t.equal(parse('2 cup flour').unit, 'cup');
  t.equal(parse('2 c. flour').unit, 'c.');
  t.equal(parse('2 c flour').unit, 'c');
  t.end();
});

test('parses ounces', function(t) {
  t.equal(parse('1 ounce water').unit, 'ounce');
  t.equal(parse('2 ounces water').unit, 'ounces');
  t.equal(parse('2 oz water').unit, 'oz');
  t.equal(parse('2 oz. water').unit, 'oz.');
  t.end();
});

test('parses fluid ounces', function(t) {
  t.equal(parse('2 fluid ounces water').unit, 'fluid ounces');
  t.equal(parse('1 fluid ounce water').unit, 'fluid ounce');
  t.equal(parse('1 fluid oz. water').unit, 'fluid oz.');
  t.equal(parse('1 fluid oz water').unit, 'fluid oz');
  t.equal(parse('1 fl. oz. water').unit, 'fl. oz.');
  t.equal(parse('1 fl oz water').unit, 'fl oz');
  t.equal(parse('1 fl oz. water').unit, 'fl oz.');
  t.equal(parse('1 fl. oz water').unit, 'fl. oz');
  t.equal(parse('1 fl ounces water').unit, 'fl ounces');
  t.equal(parse('1 fl ounce water').unit, 'fl ounce');
  t.equal(parse('1 fl. ounce water').unit, 'fl. ounce');
  t.end();
});

test('parses gallons', function(t) {
  t.equal(parse('1 gallon water').unit, 'gallon');
  t.equal(parse('2 gallons water').unit, 'gallons');
  t.equal(parse('2 gal. water').unit, 'gal.');
  t.equal(parse('2 gal water').unit, 'gal');
  t.end();
});

test('parses pints', function(t) {
  t.equal(parse('1 pint water').unit, 'pint');
  t.equal(parse('2 pints water').unit, 'pints');
  t.end();
});

test('parses pounds', function(t) {
  t.equal(parse('2 pounds chocolate').unit, 'pounds');
  t.equal(parse('1 pound chocolate').unit, 'pound');
  t.equal(parse('2 lbs. chocolate').unit, 'lbs.');
  t.equal(parse('2 lbs chocolate').unit, 'lbs');
  t.equal(parse('2 lb. chocolate').unit, 'lb.');
  t.equal(parse('2 lb chocolate').unit, 'lb');
  t.end();
});

test('parses quarts', function(t) {
  t.equal(parse('2 quarts water').unit, 'quarts');
  t.equal(parse('1 quart water').unit, 'quart');
  t.equal(parse('2 qts. water').unit, 'qts.');
  t.equal(parse('2 qts water').unit, 'qts');
  t.equal(parse('2 qt. water').unit, 'qt.');
  t.equal(parse('2 qt water').unit, 'qt');
  t.end();
});

test('parses tablespoons', function(t) {
  t.equal(parse('2 tablespoons water').unit, 'tablespoons');
  t.equal(parse('1 tablespoon water').unit, 'tablespoon');
  t.equal(parse('1 tbsp. water').unit, 'tbsp.');
  t.equal(parse('1 tbsp water').unit, 'tbsp');
  t.equal(parse('1 tbs. water').unit, 'tbs.');
  t.equal(parse('1 tbs water').unit, 'tbs');
  t.equal(parse('1 T. water').unit, 'T.');
  t.equal(parse('1 T water').unit, 'T');
  t.end();
});

test('parses teaspoons', function(t) {
  t.equal(parse('2 teaspoons water').unit, 'teaspoons');
  t.equal(parse('1 teaspoon water').unit, 'teaspoon');
  t.equal(parse('1 tsp. water').unit, 'tsp.');
  t.equal(parse('1 tsp water').unit, 'tsp');
  t.equal(parse('1 t. water').unit, 't.');
  t.equal(parse('1 t water').unit, 't');
  t.end();
});

test('parses grams', function(t) {
  t.equal(parse('2 grams water').unit, 'grams');
  t.equal(parse('1 gram water').unit, 'gram');
  t.equal(parse('1 gr. water').unit, 'gr.');
  t.equal(parse('1 gr water').unit, 'gr');
  t.equal(parse('1 g. water').unit, 'g.');
  t.equal(parse('1 g water').unit, 'g');
  t.end();
});

test('parses kilograms', function(t) {
  t.equal(parse('2 kilograms water').unit, 'kilograms');
  t.equal(parse('1 kilogram water').unit, 'kilogram');
  t.equal(parse('1 kg. water').unit, 'kg.');
  t.equal(parse('1 kg water').unit, 'kg');
  t.end();
});

test('parses liters', function(t) {
  t.equal(parse('2 liters water').unit, 'liters');
  t.equal(parse('1 liter water').unit, 'liter');
  t.equal(parse('1 L. water').unit, 'L.');
  t.equal(parse('1 l. water').unit, 'l.');
  t.equal(parse('1 L water').unit, 'L');
  t.equal(parse('1 l water').unit, 'l');
  t.end();
});

test('parses milligrams', function(t) {
  t.equal(parse('2 milligrams water').unit, 'milligrams');
  t.equal(parse('1 milligram water').unit, 'milligram');
  t.equal(parse('1 mg. water').unit, 'mg.');
  t.equal(parse('1 mg water').unit, 'mg');
  t.end();
});

test('parses milliliters', function(t) {
  t.equal(parse('2 milliliters water').unit, 'milliliters');
  t.equal(parse('1 milliliter water').unit, 'milliliter');
  t.equal(parse('1 ml. water').unit, 'ml.');
  t.equal(parse('1 ml water').unit, 'ml');
  t.end();
});

test('parses dashes', function(t) {
  t.equal(parse('2 dashes salt').unit, 'dashes');
  t.equal(parse('1 dash salt').unit, 'dash');
  t.end();
});

test('parses handfuls', function(t) {
  t.equal(parse('2 handfuls salt').unit, 'handfuls');
  t.equal(parse('1 handful salt').unit, 'handful');
  t.end();
});

test('parses pinches', function(t) {
  t.equal(parse('2 pinches salt').unit, 'pinches');
  t.equal(parse('1 pinch salt').unit, 'pinch');
  t.end();
});

test('parses touches', function(t) {
  t.equal(parse('2 touches salt').unit, 'touches');
  t.equal(parse('1 touch salt').unit, 'touch');
  t.end();
});

test('parses slices', function(t) {
  t.equal(parse('2 slices bacon').unit, 'slices');
  t.equal(parse('1 slice bacon').unit, 'slice');
  t.end();
});

test('parses packets', function(t) {
  t.equal(parse('2 packets yeast').unit, 'packets');
  t.equal(parse('1 packet yeast').unit, 'packet');
  t.end();
});

test('parses envelopes', function(t) {
  t.equal(parse('2 envelopes yeast').unit, 'envelopes');
  t.equal(parse('1 envelope yeast').unit, 'envelope');
  t.end();
});

test('parses splashes', function(t) {
  t.equal(parse('a few splashes of maple cyrup').unit, 'splashes');
  t.equal(parse('1 splash yeast').unit, 'splash');
  t.end();
});

test('parses sprigs', function(t) {
  t.equal(parse('2 Sprigs of fresh mint').unit, 'Sprigs');
  t.equal(parse('sprig of fresh mint').unit, 'sprig');
  t.end();
});

test('parses sheet', function(t) {
  t.equal(parse('2 sheets of nori').unit, 'sheets');
  t.equal(parse('sheet of nori').unit, 'sheet');
  t.end();
});
