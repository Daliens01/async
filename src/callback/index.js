function sum(n1,n2){
    return n1+n2
}

function callb(n1,n2,callback){
    return callback(n1,n2)
}

console.log(callb(2,2,sum));

setTimeout(() => {
    console.log("hi world");
}, 2000);

function saludar(name){
    console.log("hola "+name);
}

setTimeout(saludar, 2000, "herb");
//no se debe de poner los () en la función callback
//yo lo veo como una funcion abstracta que podría 
//verse como un stored prochedure 


const myfn = () => { console.log("finalizado") }
 function execCallback(callback) {
  return setTimeout(callback, 2000)
}
execCallback((e)=>console.log(e))
