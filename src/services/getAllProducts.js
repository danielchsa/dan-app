export function getAllProducts() {
 return  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
}
