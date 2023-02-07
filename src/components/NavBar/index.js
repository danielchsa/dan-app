import React, { useEffect, useState  } from 'react';
import './NavBar.css'

import Title from '../Title'
import { getCategories } from '../../services/getCategories';
import { Link } from 'wouter';

function NavBar({}) {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        getCategories().then(setCategories).catch(err => console.log(err))
    },[])
    return ( 
    <header>
        <Title />
        <nav>
            {
                categories.map((category) => (
                    <Link to={`/category/${category}`} key={category}>
                        <a>{category}</a>
                    </Link>

                ))
            }
        </nav>
        <button>Login</button>
    </header> );
}

export default NavBar;