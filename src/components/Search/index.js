import React, { useRef } from "react";

import { useLocation } from "wouter";
import './Search.css'

function Search({}) {
    const entry = useRef();
    const [path, to] = useLocation();

    const handleChange = (e) =>{
        
    }

    const handleSumit = (e, values) =>{
        e.preventDefault();
        const keyword = (entry.current.value).toLowerCase()
        to(`/category/${keyword}`)
    }

    return <section className='search-div'>
    <form onSubmit={handleSumit}>
        <div>
            <input type='text' placeholder='Search for a product' onChange={handleChange} ref={entry}/>
        </div>
    </form>
    </section>
}

export default Search;