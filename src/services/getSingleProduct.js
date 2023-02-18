export function getSingleProduct(id) {
    return  fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((err) => console.log(err));
}
    