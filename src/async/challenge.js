import fetch from "node-fetch"

const API = `https://api.escuelajs.co/api/v1`

async function fetchData (urlApi){
    const response = await fetch(urlApi)
    return  response.json()
}

const getData = async(urlApi)=>{
    try {
        const products = await fetchData(`${urlApi}/products`)
        const data = await fetchData(`${urlApi}/products/${products[0].id}`)
        const category = await fetchData(`${urlApi}/categories/${data.category.id}`)

        console.log(data);
        console.log(data.title);
        console.log(category.name)
    } catch (error) {
        console.log(error);
    }
}

getData(API)
