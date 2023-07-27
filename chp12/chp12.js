// Answer to Question NO.1

// let a = async(text) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve(text) 
//         }, 2000);
//     })
// }

// (async()=>{
//     let b = await a("Hello");
//     console.log(b);
//     let c = await a("World");
//     console.log(c);
// })()

// Answer to Question No.2

let arr = [1,2,3]
const average = (a,b,c) =>{
    return (a+b+c)/3
}

let av = average(...arr);
console.log(...arr)
console.log(av);

// Answer to Question #3

let a = async(text, n=2) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(text) 
        }, 1000 * n);
    })
}

(async()=>{
    let b = await a("I am resolveing after 1 Seconds",  1);
    console.log(b);
    let c = await a("I am resolving after 3 seconds", 3);
    console.log(c);
})()

// Answer To Question # 5
function simpleInterest(p,r,t){
    return (p*r*t)/100;
}

let inter = simpleInterest(1000,5,1)
console.log(`Your Interest is: ${inter}`);