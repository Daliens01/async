const promise = new Promise((resolve, reject)=>{
    resolve("se resolvió")
})

const cows = 9

const countCows = new Promise((resolve, reject)=>{
    if(cows > 10) resolve(`tenemos ${cows} vacas`)
    else reject("no tenemos las suficientes vacas")
})

countCows.then(result => console.log(result)).catch(error => console.log(error))

 function delay(time, message) {
    const result = new Promise((resolve, reject) => {
      setTimeout(()=>{resolve(`${message}`)}, time)
    })
    return result
  }

  delay(2000, "hola despues de 2 segundos").then(message => console.log(message))
  delay(3000, "hola despues de 3 segundos").then(message => console.log(message))
  