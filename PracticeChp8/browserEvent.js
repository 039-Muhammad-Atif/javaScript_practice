let x =  function(e)
{
    console.log(e);
    alert("Hello Pakistan!");
}

let btncolor = document.getElementById("btn");

let y = function(e) {
    alert("Hello Word!");
    btncolor.style.background = 'green';
}

btn.addEventListener('click', x);
btn.addEventListener('click', y);

let a = prompt("Enter Number 1 Or 2 only:");
if (a == "2") {
    btn.removeEventListener('click', y);
}
