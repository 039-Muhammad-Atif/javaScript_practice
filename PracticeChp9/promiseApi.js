let p1 = new Promise((resolve, reject) => {
    console.log("Promise 1 is pending...");
    setTimeout(() => {
        // console.log("I am apromise 1 and I am fulfilled");
        //  resolve(39);
        reject(new Error("Promise 2 Show an error"))

    }, 1000);
})
let p2 = new Promise((resolve, reject) => {
    console.log("Promise 2 is pending...");
    setTimeout(() => {
        // console.log("I am apromise 1 and I am fulfilled");
        //  resolve(98);
        reject(new Error("Promise 2 Show an error"))
    }, 3000);
})

let p3 = new Promise((resolve, reject) => {
    console.log("Promise 3 is pending...");
    setTimeout(() => {
        // console.log("I am apromise 2 and I am Rejected");
        resolve(96)
    }, 5000);
})

// let allPromise = Promise.all([p1,p2,p3]);
// let allPromise = Promise.allSettled([p1,p2,p3]);
// let allPromise = Promise.race([p2,p1,p3]);
// let allPromise = Promise.any([p2,p1,p3]);
// let allPromise = Promise.resolve(3);
let allPromise = Promise.reject(3);
allPromise.then((value)=>{
    console.log(value)
})