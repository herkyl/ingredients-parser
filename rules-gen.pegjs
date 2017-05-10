start
  = ingredient_full

ingredient_full
  = amount:amount? (ws+)? container:container? unit:unit? (ws+)? preposition:preposition? (ws+)? ingredient:ingredient? [\n]?  {
    var result = {
      amount: amount,
      container: container,
      ingredient: ingredient,
      unit: unit,
    };

    for(var i in result) {
      if(result[i] === null || result[i] === undefined) {
        delete result[i];
      }
    }

    return result;
  }

amount
  = fraction
  / mixed_number
  / word_number
  / float
  / integer
  / few
  / couple

container
  = container_wrapper_start? (ws+)? amount:amount (ws+)? unit:unit (ws+)? container_wrapper_end? {
    return { amount: amount, unit: unit };
  }

container_wrapper_start
  = "(" / "{" / "[" / "<"

container_wrapper_end
  = ")" / "}" / "]" / ">"

ws
  = " "
  / [\t]

preposition
  = 'of'i

article
  = 'an'i / 'a'i

space
  = " "

ingredient
  = phrase

phrase
  = $(.+)

punctuation
  = [,]

word
  = letters:letter+ { return letters.join(''); }

float
  = $(integer? [.] integer)

mixed_number
  = $(integer space fraction)

word_number
  = 'one'i
  / 'two'i
  / 'three'i
  / 'four'i
  / 'five'i
  / 'six'i
  / 'seven'i
  / 'eight'i
  / 'nine'i
  / 'ten'i
  / 'eleven'i
  / 'twelve'i

couple
  = $(article? ' '? 'couple'i)

few
  = $(article? ' '? 'few'i)

fraction
  = $(integer [/] integer)

integer
  = digits:[0-9]+ { return digits.join(''); }

letter
  = [a-zA-Z]

unit
  = $(english_unit !letter)
  / $(metric_unit !letter)
  / $(imprecise_unit !letter)

english_unit
  = cup
  / fluid_ounce
  / gallon
  / ounce
  / pint
  / pound
  / quart
  / tablespoon
  / teaspoon

cup
  = 'cups'i
  / 'cup'i
  / 'c.'i
  / 'c'i

fluid_ounce
  = fluid ws ounce

fluid
  = 'fluid'i
  / 'fl'i '.'?

gallon
  = 'gallons'i
  / 'gallon'i
  / 'gal.'i
  / 'gal'i

ounce
  = 'ounces'i
  / 'ounce'i
  / 'oz.'i
  / 'oz'i

pint
  = 'pints'i
  / 'pint'i
  / 'pt.'i
  / 'pt'i

pound
  = 'pounds'i
  / 'pound'i
  / 'lbs.'i
  / 'lbs'i
  / 'lb.'i
  / 'lb'i

quart
  = 'quarts'i
  / 'quart'i
  / 'qts.'i
  / 'qts'i
  / 'qt.'i
  / 'qt'i

tablespoon
  = 'tablespoons'i
  / 'tablespoon'i
  / 'tbsp.'i
  / 'tbsp'i
  / 'tbs.'i
  / 'tbs'i
  / 'T.'
  / 'T'

teaspoon
  = 'teaspoons'i
  / 'teaspoon'i
  / 'tsp.'i
  / 'tsp'i
  / 't.'
  / 't'

metric_unit
  = kilogram
  / gram
  / milligram
  / liter
  / deciliter
  / centiliter
  / milliliter

gram
  = 'grams'i
  / 'gram'i
  / 'gr.'i
  / 'gr'i
  / 'g.'i
  / 'g'i

kilogram
  = 'kilograms'i
  / 'kilogram'i
  / 'kg.'i
  / 'kg'i

liter
  = 'liters'i
  / 'liter'i
  / 'l.'i
  / 'l'i

milligram
  = 'milligrams'i
  / 'milligram'i
  / 'mg.'i
  / 'mg'i

milliliter
  = 'milliliters'i
  / 'milliliter'i
  / 'ml.'i
  / 'ml'i

centiliter
  = 'centiliters'i
  / 'centiliter'i
  / 'cl.'i
  / 'cl'i

deciliter
  = 'deciliters'i
  / 'deciliter'i
  / 'dl.'i
  / 'dl'i

imprecise_unit = bag bar bottle bowl breast bulb bun bunch can carton cone clove container large medium mini small cube fillet head unit jar pack package packet patty piece portion servings roll slice dash handful pinch touch slice envelope splash spring sheet
bag = 'bags'i 'bag'i
bar = 'bars'i 'bar'i
bottle = 'bottles'i 'bottle'i
bowl = 'bowls'i 'bowl'i
breast = 'breasts'i 'breast'i
bulb = 'bulbs'i 'bulb'i
bun = 'buns'i 'bun'i
bunch = 'bunches'i 'bunch'i
can = 'cans'i 'can'i
carton = 'cartons'i 'carton'i
cone = 'cones'i 'cone'i
clove = 'cloves'i 'clove'i
container = 'containers'i 'container'i
large = 'larges'i 'large'i
medium = 'mediums'i 'medium'i
mini = 'minis'i 'mini'i
small = 'smalls'i 'small'i
cube = 'cubes'i 'cube'i
fillet = 'fillets'i 'fillet'i
head = 'heads'i 'head'i
unit = 'units'i 'unit'i
jar = 'jars'i 'jar'i
pack = 'packs'i 'pack'i
package = 'packages'i 'package'i
packet = 'packets'i 'packet'i
patty = 'patties'i 'patty'i
piece = 'pieces'i 'piece'i
portion = 'portions'i 'portion'i
servings = 'servingses'i 'servings'i
roll = 'rolls'i 'roll'i
slice = 'slices'i 'slice'i
dash = 'dashs'i 'dash'i
handful = 'handfuls'i 'handful'i
pinch = 'pinches'i 'pinch'i
touch = 'touches'i 'touch'i
slice = 'slices'i 'slice'i
envelope = 'envelopes'i 'envelope'i
splash = 'splashs'i 'splash'i
spring = 'springs'i 'spring'i
sheet = 'sheets'i 'sheet'i
