import fetch from "node-fetch"

const API = `https://api.escuelajs.co/api/v1`

function fetchData(urlApi){
    return fetch(urlApi)
}

// fetchData(`${API}/products`).then(response => response.json())
// .then(products => console.log(products)).catch(error => console.log(error))

fetchData(`${API}/products`)
.then(response => response.json())
.then(product => {
    console.log(product);
    return fetchData(`${API}/products/${product[0].id}`)
})
.then(response => response.json())
.then(product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json()).then(response => console.log(response.name)).catch(err=>console.log(err))
.finally(()=>console.log("final"))