btn1.addEventListener('click', function(e){
    alert("You Click Button 1")
})
btn2.addEventListener('click', function(e){
    alert("You Click Button 2")
})
btn3.addEventListener('click', function(e){
    alert("You Click Button 3")
})
btn4.addEventListener('click', function(e){
    alert("You Click Button 4")
})

// Answer to Question #3
let googleBtn = document.getElementById("google");
googleBtn.addEventListener('click', function(e)
{
    window.location = "http://www.google.com";
})
// Answer to Question #4 // See forward

// Answer to Question #5
setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb-container")
}, 300);
