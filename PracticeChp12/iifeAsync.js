const f = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(234);
        }, 3000);
    })
}

(async()=>{
    let a = await f()
    console.log(a)

    let b = await f()
    console.log(b)

    let c = await f()
    console.log(c)
})()
