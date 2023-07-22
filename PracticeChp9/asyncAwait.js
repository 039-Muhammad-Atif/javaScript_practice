async function Atif(){
    let wanaWeather =new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("27 Degree")
        }, 2000)
    })
    let LahoreWeather =new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("47 Degree")
        },5000)
    })
    console.log("Featching wanaweather..")
    let ww = await wanaWeather
    console.log("Featched")
    console.log("Featching Lahoreweather..")
    let lw = await LahoreWeather
    console.log("Featched")

    return [ww,lw]
}
console.log('Welcome to Weather control room.')
let a = Atif()
a.then((value) =>{
    console.log(value)
})