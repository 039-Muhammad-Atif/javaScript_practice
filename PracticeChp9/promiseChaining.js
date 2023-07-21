const loadScript = (src)=>{
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript"
        script.src = src;
        document.body.appendChild(script);
        script.onload = ()=>{
            resolve("Script #1 are loaded successfuly");
        }
        script.onerror = () =>{
            reject(0);
        }
    })
}

let p = loadScript("http://127.0.0.1:5500/PracticeChp9/promise.js")
p.then((value)=>{
    console.log(value);
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js");
}).then((value) =>{
    console.log("Script #2 are loaded successfuly");
}).catch((error) =>{
    console.log("We are having problem on loading this script")
})