// Answer to Question # 1 $ 2 $ 5
class Complex{
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }

    add(num){
        this.real += num.real;
        this.imaginary += num.imaginary;
    }

    set real(newReal){
        this._real = newReal;
    }
    get real(){
        return this._real;
    }

    set imaginary(newImaginary){
        this._imaginary = newImaginary;
    }
    get imaginary(){
        return this._imaginary;
    }
}

let a = new Complex(2,6);
let b = new Complex(6,3);
a.real = 10;
a.imaginary = 10;
b.real = 20;
b.imaginary = 50;

a.add(b);
console.log(`${a.real} + ${a.imaginary}i`)

// Answer to Q#3

class Human{
    constructor(name, favfood){
        this.name = name;
        this.favfood = favfood;
    }

    walk(){
        console.log(`Human can Walk`);
    }
}

class Student extends Human{
    walk(){
        super.walk();
        console.log(`${this.name} is a Student`)
    }
}

let h = new Human('Kashif', 'Chawal');
let s = new Student('Atif', 'Gousht');
h.walk();
s.walk();

// Answer to Q#4

console.log(h instanceof Student);
console.log(s instanceof Human);
console.log(Student instanceof Student);
