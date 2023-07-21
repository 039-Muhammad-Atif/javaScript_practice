let p1 = new Promise((resolve, reject) => {
    console.log("Promise 1 is pending...");
    setTimeout(() => {
        // console.log("I am apromise 1 and I am fulfilled");
         resolve(39);
    }, 5000);
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise 2 is pending...");
    setTimeout(() => {
        // console.log("I am apromise 2 and I am Rejected");
        reject(new Error("I am an Error:"));
    }, 5000);
})

// console.log(p1,p2);

p1.then((value)=>{
    console.log(value)
})

p2.then((error)=>{
    console.log(error)
})
// p2.catch((error)=>{
//     console.log(error)
// })
