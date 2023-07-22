try {
    let age = prompt("Enter your Age:")
    age = Number.parseInt(age); 
    if (age > 100) {
        throw new ReferenceError("This is probably not true")
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

console.log("The script is still runing.")