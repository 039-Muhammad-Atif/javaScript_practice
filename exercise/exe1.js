const prompt = require('prompt-sync')();

let randomNum = Math.floor(Math.random()*(100 - 1)) + 1;

let num;
let chance = 0;
do{
    num = prompt("Guess the Correct Number\"Between 1 to 100\": ")
    if(num < randomNum)
    {
        console.log(`The ${num} is Lesser then original number`)
    }
    else if (num > randomNum)
    {
        console.log(`The ${num} is greater then original number`)   
    } 
    else
    {
        console.log(`The ${num} is Equal then original number`)
        
    }
    chance++
}while(num != randomNum && chance!=100)
if(num == randomNum)
{
    console.log(`The Guess was Correct`)
    console.log(`The number is ${randomNum}`)
    console.log("Your Score is: ", 100-chance )
}
else
{
    console.log(`The Guess was InCorrect`)
    console.log(`The number is ${randomNum}`)
    console.log("Your Score is: ", 100-chance )
}
