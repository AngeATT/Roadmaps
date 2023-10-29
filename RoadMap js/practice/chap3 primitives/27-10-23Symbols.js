let s1 = Symbol("prop");
let s2 = Symbol("prop");

console.log(s1)
console.log(s2)

let obj = {};
let obj2 = {};

obj[s1] = 2;
obj2["prop"] = 2;

obj[s2] = 3
obj2["prop"] = 3
console.log(obj)
console.log(obj2)

let s = Symbol.for("shared");
let t = Symbol.for("shared");
s === t // => true
s.toString() // => "Symbol(shared)"
Symbol.keyFor(t) // => "shared"

console.log(this)