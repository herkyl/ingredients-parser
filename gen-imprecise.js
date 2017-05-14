const plural = require('plural');

const imprecise_units = [
  "bag", "bar", "bottle", "bowl", "breast", "bulb", "bun", "bunch", "can",
  "carton", "cone", "clove", "large", "medium", "mini", "small",
  "cube", "fillet", "head", "jar", "package", "packet", "pack", "patty",
  "piece", "portion", "servings", "roll", "slice", "handful", "pinch",
  "touch", "envelope", "sprig", "sheet"
];

const l = imprecise_units.concat(['dash','splash','unit_', "container_"]).join(' / ');
console.log("imprecise_unit = %s",l);

imprecise_units.forEach(w =>
  console.log("%s = '%s'i / '%s'i", w, plural(w), w)
);

// fix wrong plural
console.log("splash = 'splashes'i / 'splash'i");
console.log("dash = 'dashes'i / 'dash'i");

// fix left recursion problem
console.log("unit_ = 'units'i / 'unit'i");
console.log("container_ = 'containers'i / 'container'i");
