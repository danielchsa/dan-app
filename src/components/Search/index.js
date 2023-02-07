import React, {useState, useRef } from "react";
import { getProductsByCategory } from "../../services/getProductByCategory";

import { useLocation } from "wouter";
import './Search.css'

function Search({}) {
    const [keyword, setKeyword] = useState();
    const entry = useRef();
    const [path, to] = useLocation();

    const handleChange = (e) =>{
        
    }

    const handleSumit = (e, values) =>{
        e.preventDefault();
        to(`/category/${entry.current.value}`)
    }

    return <section className='search-div'>
    <form onSubmit={handleSumit}>
        <div>
            <input type='text' placeholder='Search for a product' onChange={handleChange} ref={entry}/>
        </div>
        {/* <button type="submit">Search</button> */}
    </form>
    </section>
}

export default Search;