/* document.write('Hello');
let first = document.getElementById("first");

let a = setTimeout(function()
{
    first.innerHTML = "<div>I am running after timeout</div>";
}, 5000)

let cmd = prompt("Do you want to run a Timeout (y/n):")
if(cmd == "n")
{
    clearTimeout(a);
}
else
{
    setTimeout(a);
} */

let beforeFirst = document.getElementsByTagName("body");
console.log(beforeFirst)
//body.innerHTML = <h1>Hey</h1>

const sum = (a, b)=> {
console.log(`Sum of ${a} + ${b} is: ${a+b}`)
document.body.firstElementChild.replaceWith(`Sum of ${a} + ${b} is: ${a+b}`);
}

setTimeout(sum, 3000, 23, 77);