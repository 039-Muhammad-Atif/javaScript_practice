let key = prompt("Enter The key:")
let value = prompt("enter the value for SessionStorage:")
localStorage.setItem(key,value);
// console.log(`The key ${key} is ${value} value`);

// Method of LocalStorage

// let getkey=localStorage.getItem(302);
// console.log(getkey);

// let getkey=localStorage.key(5);
// console.log(getkey);

// let getkey=localStorage.length;
// console.log(getkey);

// localStorage.clear()

// //////// SessionStorage \\\\\\\\\\

sessionStorage.setItem(key, value)
console.log(`The key ${key} is ${value} value`)


