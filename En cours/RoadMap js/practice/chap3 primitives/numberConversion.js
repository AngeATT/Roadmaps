console.log(parseInt("3 blind mice")) // => 3
console.log(parseFloat(" 3.14 meters")) // => 3.14
console.log(parseInt("-12.34")) // => -12
console.log(parseInt("b 10")) // => 255
console.log(parseFloat("0xff")) // => 255
console.log(parseInt("-0XFF")) // => -255
console.log(parseFloat(".1")) // => 0.1
console.log(parseInt("0.1")) // => 0
console.log(parseInt(".1")) // => NaN: integers can't start with "."
console.log(parseFloat("$72.47")) // => NaN: numbers can't start with "$"
console.log(parseInt("11", 2) )// => 3: (1*2 + 1)
console.log(parseInt("ff", 16)) // => 255: (15*16 + 15)
console.log(parseInt("zz", 36)) // => 1295: (35*36 + 35)
console.log(parseInt("077", 8)) // => 63: (7*8 + 7)
console.log(parseInt("077", 10)) // => 77: (7*10 + 7)