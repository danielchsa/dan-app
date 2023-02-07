
export function getProductsByCategory(category) {
    return  fetch(`https://fakestoreapi.com/products/category/${category}`)
       .then((res) => res.json())
       .then((data) => {
         return data;
       })
       .catch((err) => console.log(err));
   }
   