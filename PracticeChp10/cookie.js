document.cookie ="name = atif"
document.cookie ="age = 26"
document.cookie ="status = Double Married"
console.log(document.cookie)
let key = prompt("Enter a key:")
let value = prompt("Enter a Value:")
document.cookie =`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);