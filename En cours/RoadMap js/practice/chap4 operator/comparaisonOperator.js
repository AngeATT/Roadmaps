1 + 2 // => 3: addition.
"1" + "2" // => "12": concatenation.
"1" + 2 // => "12": 2 is converted to "2".
11 < 3 // => false: numeric comparison.
"11" < "3" // => true: string comparison.
"11" < 3 // => false: numeric comparison, "11" converted to 11.
"one" < 3 // => false: numeric comparison, "one" converted to NaN.
let a = {}
//console.log(10 in "20")

let o = {
    "prop1" : "props1",
    "prop2" : "props2"
}
const symb = Symbol("prop1");
o[symb] = "ange"

console.log(o)
o[Symbol("prop1")] = "modifier"
console.log(o)
let tab = Object.getOwnPropertySymbols(o)
console.log(tab)
o[tab[0]] = "modifierEffectivement"
console.log(o)