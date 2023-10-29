let [x,y] = [1,2]; // Same as let x=1, y=2
[x,y] = [x+1,y+1]; // Same as x = x + 1, y = y + 1
[x,y] = [y,x]; // Swap the value of the two variables
[x,y]

function xplusOne(x,y){
    return [x+1,y+1]
}

let a = xplusOne(1,2)
a[0] = 4;
console.log(a.length+ " " + a[1] + typeof a)

let man = {
    name : "francois",
    age : 21
}
let man2 = {
    f : "ange",
    age : 15
}
let tab = [1,man,man2]
let tab2 = [man, man2]

for (const [name, age] of Object.entries(tab)){
    console.log(name,age)
}
for (const [name, age] of Object.entries(tab2)){
    console.log(name,age)
}
for (const [name, age] of Object.entries(man2)){
    console.log(name,age)
}

let sparseArray = [1,,,,5];
console.log(sparseArray[2])



