var plural = require('plural')

var unprecise_units = [
  "bag", "bar", "bottle", "bowl", "breast", "bulb", "bun", "bunch", "can",
  "carton", "cone", "clove", "container", "large", "medium", "mini", "small",
  "cube", "fillet", "head", "unit", "jar", "pack", "package", "packet", "patty",
  "piece", "portion", "servings", "roll", "slice", "dash", "handful", "pinch",
  "touch","slice", "envelope", "splash", "spring", "sheet"
];

var l = unprecise_units.join(' ') 
console.log("imprecise_unit = %s",l);

unprecise_units.forEach(function(w) {
console.log("%s = '%s'i '%s'i", w, plural(w), w);
});
