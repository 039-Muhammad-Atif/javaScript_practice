const prompt = require('prompt-sync')();
//Answer of Q#1

const studentsMarks={
    Atif:94,
    haroon: 85,
    Asif: 100,
    Farhad: 99,
    Amir: 89,
    Kashif: 55,
    Muhaib: 34,
    Shoaib: 24,
    Aftab: 21,
    Adnan:57,
    Jamshaid: 43,
    Kamran: 48,
    SherZullah: 34,
    Aryan: 38,
    Israr: 70
}

for(let i=0; i< Object.keys(studentsMarks).length; i++)
{
    //console.log("Total IQ Marks of " + Object.keys(studentsMarks)[i] + " are: " + studentsMarks[Object.keys(studentsMarks)[i]]);
}

// Answer of Q#2
console.log("Answer of Q#2")
for(let i in studentsMarks)
{
    //console.log("Total IQ Marks of " + i + " are: " + studentsMarks[i]);
 
}

// Answer of Q#3
console.log("Answer to Question # 3")
let cn = 9
let i 
while(i != cn)
{
    i= prompt("Enter The Correct Number: ")
}
console.log("You have Enter the Correct Number")

//Answer of Q#4
console.log("answer to Question # 4")

const mean = (a,b,c,d,e) =>
{
    return (a+b+c+d+e)/5
}
console.log("Means of five numbers are: " + mean(1,2,3,4,5))