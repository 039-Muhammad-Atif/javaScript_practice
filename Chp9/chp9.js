// answer to Question #1

/* const loadScript = (src)=> {
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src =src;
        document.body.appendChild(script)
        script.onload = ()=>{
            resolve(1);
        }
        script.onerror= ()=>{
            reject(0);
        }
    })
    
}

let p1 = loadScript("http://127.0.0.1:5500/exercise/exe3/exe3.js");
p1.then((x)=>{
    console.log(x)
}) */

// Answer to Question #2

/* const loadScript = async (src)=> {
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src =src;
        document.body.appendChild(script)
        script.onload = ()=>{
            resolve("Script have Loaded Successfuly.");
        }
        script.onerror= ()=>{
            reject(0);
        }
    })
    
}

const loadScriptMain = async () =>{
    console.log(new Date().getMilliseconds());
    let p1 = await loadScript("http://127.0.0.1:5500/exercise/exe3/exe3.js");
    console.log(p1);
    console.log(new Date().getMilliseconds())
}

loadScriptMain(); */

// Answer To Question #3

/* let p = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject(new Error("Please it is not Acceptable."))
        }, 300)
    })
}

let a = async ()=>{
    try {
        let b = await p();
        console.log(b);
        
    } catch (error) {
        console.log("This erro is handle.")
    }
}

a(); */

//  Answer to Question #4

let p1 = async() =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(10)
        }, 1000);
    })
}

let p3 = async() =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(30)
        }, 2000);
    })
}

let p2 = async() =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(20)
        }, 3000);
    })
}

const mainfun = async()=>{
    /*console.time("mainfun")
    let a1 = await p1();
    let a2 = await p2();
    let a3 = await p3();
    console.timeEnd("mainfun")
    console.log(a1,a2,a3) */

    console.time("mainfun")
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let allp = await Promise.all([a1,a2,a3]);
    console.log(allp)
    console.timeEnd("mainfun")
}

mainfun();