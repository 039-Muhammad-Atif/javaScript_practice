let hackfun = async()=>{
    let p1 = new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Initiating hack programe . . . . . ")
        }, 2000);
    })
    let p2 = new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Haching Abdullah user name . . . . .")
        }, 3000);
    })
    let p3 = new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("User name found abdullah007 . . . . . ")
        }, 4000);
    })
    let p4 = new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Connecting to facebook . . . . . ")
        }, 5000);
    })

    let a1 = await p1;
    console.log(a1)
    let promise1 = document.getElementById("promise1")
    promise1.append(a1);

    let a2 = await p2;
    console.log(a2)
    let promise2 = document.getElementById("promise2")
    promise2.append(a2);

    let a3 = await p3;
    console.log(a3)
    let promise3 = document.getElementById("promise3")
    promise3.append(a3);

    let a4 = await p4;
    console.log(a4)
    let promise4 = document.getElementById("promise4")
    promise4.append(a4);
    
}

hackfun()