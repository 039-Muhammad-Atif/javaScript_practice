/*let a = {
    name: "Atif",
    Language: "pashto"
}

console.log(a)

let p = {
    run: ()=>{
        console.log("Run")
    }
}

p.__proto__ ={
    name1: "Muhammad Atif"
}

a.__proto__ = p;
a.run()
console.log(a.name1) */

// ////////////////// Classes in JavaScript \\\\\\\\\\\\\\\\\\\\\
/* class RailwaForm{
    submit(){
        console.log(`${this.name} form is submited.`)
    }
    cancel(){
        console.log(`You Have Canceled your TrainNO: ${this.trainno}`)
    }
    fill(givenName, trainno){
        this.name = givenName;
        this.trainno = trainno;
    }
}

let atifForm = new RailwaForm();
let kashifForm = new RailwaForm();

kashifForm.submit();
atifForm.submit();
kashifForm.cancel(); */

// ////////////////// Constructors in JavaScript \\\\\\\\\\\\\\\\\\\\\

class RailwaForm{
    constructor(name, trainno, addrees){
        this.name = name;
        this.trainno = trainno;
        this.addrees = addrees;
        //console.log("Constructor are called.")
    }
    preView(){
        console.log(`${this.name} trainNO is:${this.trainno} and his Address is ${this.addrees}`)
    }
    submit(){
        console.log(`${this.name} form is submited.`)
    }
    cancel(){
        console.log(`You Have Canceled your TrainNO: ${this.trainno}`)
    }
}

class Bus extends RailwaForm{
    busColor(){
        console.log(`Bus color is Red.`)
    }
}

let atifForm = new RailwaForm();
let kashifForm = new RailwaForm();
let atifForm1 = new RailwaForm('Atif', 420 , " Mughal khel, SouthWazristan Agancy wana");
let bcolor = new Bus()

// kashifForm.submit();
// atifForm.submit();
// kashifForm.cancel();
// atifForm1.preView();
// bcolor.busColor();

// ////////////////// OverRide Method in JavaScript \\\\\\\\\\\\\\\\\\\\\
class Employee
{
    constructor(name, age){
        this.name =name;
        this.age = age;
    }
    logIn(){
        console.log(`${this.name} has login`);
    }

    logOut(){
        console.log("Employee has logOut");
    }

    requestLeave(leave){
        console.log(`Employee has requested ${leave} Leave`);
    }
}

class Programmer extends Employee
{
    constructor(language, name, age){
        super(name, age);
        this.language = Programmer.capitalize(language);
    }
    requestCoffee(x){
        console.log(`${this.name} has requested ${x} Coffee`);
        console.log(`${this.name} is codeing in ${this.language}. It's just ${this.age} year old.`);
    }
    // requestLeave(leave){
    //     console.log(`Programmer has requested ${leave} Leave`);
    // }

    requestLeave(leave){
        super.requestLeave(5);
        console.log(`One Extra is Granted For Programmer`);
    }

// ////////////////////////// Static Method in Class \\\\\\\\\\\\\\\\\\\\\\\\\\\
static capitalize(language){
    return language.charAt(0).toUpperCase() + language.substr(1, language.length);
    }
}

let e = new Programmer("java",'Atif',26);
e.logIn();
e.requestLeave(4);
e.requestCoffee(3);

// ////////////////////////// Getter,Setter and instance Operator \\\\\\\\\\\\\\\\\\\\\\\\\\\

class Animals{
    constructor(name){
        this._name = name;
    }

    fly(){
        console.log(`I am flying`);
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }
}

class Rabbit extends Animals{
    Eating(){
        console.log("Rabbit eats carrot")
    }
}

let a = new Animals("Bat");
let c = new Rabbit("Rabbit");
a.name = "Nomi";
console.log(a.name);

console.log(a instanceof Animals);
console.log(a instanceof Rabbit);
console.log(c instanceof Animals);

