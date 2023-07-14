// Answer of Q#1
let age = 19 //prompt("Enter your age:")
/* if(age > 10 && age < 20)
{
    console.log("Age of person lies between 10 and 20");
}
else
{
    console.log("Age of person does't lies between 10 and 20")
} */

// Answer of Q#2
switch(age)
{
    case 11:
        console.log("Your age is: 11");
        break;
    case 12:
        console.log("Your age is: 12");
        break;
    case 13:
        console.log("Your age is: 13");
        break;
    case 14:
        console.log("Your age is: 14");
        break;
    case 15:
        console.log("Your age is: 15");
        break;
    default:
        console.log("your age is not valid")
}

// Answer of Q#3
let num = 11
if(num%2==0 && num%3==0)
{
    console.log(num, ": is Divisable by 2 and 3");
}
else{
    console.log(num, " :is not divisible by 2 and 3")
}

// Answer of Q#4
console.log("Question # 4")
if(num%2==0 || num%3==0)
{
    console.log(num, ": is Divisable by 2 or 3");
}
else{
    console.log(num,":is not divisible by 2 or 3")
}

// Answer of Q#5
console.log("Answer to Q#5")
console.log(age >= 18? "You can Drive": "you can't Drive")
