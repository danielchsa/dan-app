import useProduct from "../../hooks/useProduct";
import { ProductList } from "../ProductList";
import Search from "../Search";
import Title from "../Title";

function Home({}) {
    const { products } = useProduct({})
    return <>
        <Search />    
        <ProductList products={products} />
    </>
}

export default Home;