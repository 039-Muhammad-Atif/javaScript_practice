// Destructure Assignment in javaScript
let arr = [3,4,5,6,7,8,9];

// let [a,b] = arr;
// console.log(a,b);

// let [a,b, ...rest] = arr;
// console.log(a,b, rest );

// let [a, , , ...rest] = arr;
// console.log(a, rest );

let {a,b,c} = {a:1, b:3, c:6}
console.log(a, c );

// Spread Operator
let arr1 = [9,8,7,6,5,4];
let obj1 = {...arr1};

console.log(obj1);

function sum(v1,v2,v3){
    return v1+v2+v3
}

console.log(sum(...arr1));

//  Mostly used in React

let obj2 = {
    name: "Kashif",
    company: "Electrication",
    address: "Wana"
}

console.log({...obj2, name: "Atif", company: "Software Developer"} );