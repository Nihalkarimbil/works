import React, { useContext } from 'react'
import { usercontext } from './Context'

function Cmp2() {
   const {count,setCount}= useContext(usercontext)
  return (
    <div>
        <h1>counter vallue:{count}</h1>
        <button onClick={()=>setCount((count)=>count+1)}>clickk {count}</button>
    </div>
  )
}

export default Cmp2