import fetch from "node-fetch"

const API = `https://api.escuelajs.co/api/v1`

function postData(urlApi, data){
    const response = fetch(urlApi,{
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return response
}

const data = {
    "title": "titulo ejemplo",
    "price": 10,
    "description": "not allowed to speak",
    "categoryId": 1,
    "imgaes":[
        "https://placeimg.com/640/480/any"
    ]
}

postData(`${API}/products`,data)
.then(response => console.log(response.json()))
.then(data => console.log(data))
.catch(err=> console.log(err))

//supongo que no funciona porque ya no es posible hacer post en la fake api de platzi