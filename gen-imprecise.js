var plural = require('plural')

var unprecise_units = [
  "bag", "bar", "bottle", "bowl", "breast", "bulb", "bun", "bunch", "can",
  "carton", "cone", "clove", "container", "large", "medium", "mini", "small",
  "cube", "fillet", "head", "jar", "package", "packet", "pack", "patty",
  "piece", "portion", "servings", "roll", "slice", "handful", "pinch",
  "touch","slice", "envelope", "sprig", "sheet"
];

var l = unprecise_units.concat(['dash','splash','unit_']).join(' / ') 
console.log("imprecise_unit = %s",l);

unprecise_units.forEach(function(w) {
console.log("%s = '%s'i / '%s'i", w, plural(w), w);
});

// fix wrong plural
console.log("splash = 'splashes'i / 'splash'i");
console.log("dash = 'dashes'i / 'dash'i");

// fix left recursion problem
console.log("unit_ = 'units'i / 'unit'i");
