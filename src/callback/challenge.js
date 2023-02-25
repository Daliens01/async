const request = require("xmlhttprequest").XMLHttpRequest

const API = `https://api.escuelajs.co/api/v1`

function fetchdata(urlApi, callback){
    let xhttp = new request()
    xhttp.open("GET",urlApi, true)
    xhttp.onreadystatechange = (e)=>{
        if(xhttp.readyState === 4){
            if(xhttp.status === 200) {callback(null,JSON.parse(xhttp.responseText))}
            else{
                const error = new Error("error "+urlApi)
                return callback(error,null)
            }
        } 
    }
    xhttp.send()
    //con onready sabemos cuando esta disponible la info
    //4 significa que se ha completada la llamada
}

fetchdata(`${API}/products`,(error1,data1)=>{
    if(error1)return console.log(error1)
    fetchdata(`${API}/products/${data1[0].id}`, (error2,data2)=>{
        if(error2)return console.log(error2)
        fetchdata(`${API}/categories/${data2?.category?.id}`,(error3,data3)=>{
            if(error3) return console.log(error3)
            console.log(data1[0])
            console.log(data2.title)
            console.log(data3.name)
        })
    })
})//se le conoce a esta anidación como callback
//se creo un script en package json para acortar la llamada del codigo en un script