import React, { createContext, useState } from 'react'
import Cmp2 from './Cmp2'
import Cmp3 from './Cmp3'


export const usercontext = createContext()
function Context() {
    
    const [count,setCount]=useState(0)
    return ( 
    <div>
        <usercontext.Provider value={{count,setCount}}>
            <Cmp2 />
            <Cmp3 />
        </usercontext.Provider>
    </div>
  )
}

export default Context