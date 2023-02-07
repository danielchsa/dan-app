import React, { useState } from 'react'

const Context = React.createContext({
    access: 'denied',
    reason: "You don't have access to this information"
})

export default Context;

export function ProductContextProvider ({children}) {
    const [products, setProducts] = useState([])
    
    return <Context.Provider value={{products, setProducts}}>
        {children}
    </Context.Provider>
}
