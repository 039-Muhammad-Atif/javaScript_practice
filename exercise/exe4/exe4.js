let clock = document.getElementById("clock") 

setInterval(async function(){
    let date = new Date();
    clock.innerHTML = date;
}, 1000)