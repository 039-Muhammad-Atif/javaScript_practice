// Answer to Question #1

/* let age = prompt("Enter your age:");
age = Number.parseInt(age)
alert(age >= 18? "You Can Drive" : "You Can't Drive"); */

//Answer to Question #2

/* let runAgain = true;
while(runAgain)
{
    let age = prompt("Enter your age:");
    age = Number.parseInt(age)
    alert(age >= 18? "You Can Drive" : "You Can't Drive");
    runAgain = confirm("Do you want to play Again")
} */

// Answer to Question #3

let runAgain = true;
while(runAgain)
{
    let age = prompt("Enter your age:");
    age = Number.parseInt(age)
    if(age<=0)
    {
        console.error("Age must be greater than 0")
    }
    alert(age >= 18? "You Can Drive" : "You Can't Drive");
    runAgain = confirm("Do you want to play Again")
}

// Answer to Question #4
let num = prompt("Enter the Number:")
num = Number.parseInt(num)
if(num>4)
{
    location.href = "https://www.google.com"
}

// Answer to Question #5
let color = prompt("Enter the background Color:")
document.body.style.background = color;