// answer to question #1 and #2.
const prompt=require('prompt-sync')();

let terminator = 0;
let arr =[];
let i;
do {
    i = prompt("Enter the number to the array:");
    i = Number.parseInt(i);
    arr.push(i);
} while(i != terminator)

console.log(arr);

// Answer to Question #3
console.log("Answer to Question #3")
let n = arr.filter((value)=>{
    return value%10 == 0;
})
console.log(n);

// Answer To Question #4
console.log("Answer to Question #4")
let sqrArray = arr.map((x)=>{
    return x*x;
})
console.log(sqrArray);


// Answer to Question #5
let arr1 = [1,2,3,4,5,6,7,8,9]

console.log("Answer to question #5")

let factArray = arr1.reduce((y1, y2)=>{
    return y1 * y2;
})
console.log(factArray)