
export function getCategories (){

    return fetch('https://fakestoreapi.com/products/categories')
            .then(resp => resp.json())
            .then(data => {
                return data;
            })
            .catch(err => console.log(err))
}