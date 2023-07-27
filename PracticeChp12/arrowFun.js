// Mathods to declear Arrow functions

// const sayHello = ()=> console.log("Hallo..");
// sayHello()

// const sayHello = name => console.log("Hallo.. " + name);
// sayHello("Atif");

// const sayHello = (name, greet) => console.log(`Hello ${name}, ${greet}`);
// sayHello("Atif", 'Good Morning');

const sayHello = (name, greet) => console.log(`Hello ${name}, ${greet}`);
sayHello("Atif", 'Good Morning');

const x = {
    name: "atif",
    roll: "React Native Developer",
    exp: 2,
    show: function(){
        console.log(`My name is ${this.name} \nThe roll is ${this.roll}`)

        // setTimeout(function(){
        //     console.log("Inside settimeOut function")
        //     console.log(`My name is ${this.name} \nThe roll is ${this.roll}`)
        // }, 2000);

        setTimeout(() => {
            console.log("Inside settimeOut function")
            console.log(`My name is ${this.name} \nThe roll is ${this.roll}`)
        }, 2000);
    }
}

x.show()