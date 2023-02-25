const fn = ()=>{
    return new Promise((resolve, reject)=>{
    (true)?setTimeout(()=>resolve("asincrono"),2000):reject(new Error("error"))
    })
}



const fn2 = async ()=> console.log(await fn())
console.log("before");
fn2()
console.log("after")