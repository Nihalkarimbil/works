import React, { useContext } from 'react'
import { usercontext } from './Context'

function Cmp3() {
    const {count}=useContext(usercontext)
  return (
    <div>
        <h1> counter value 3rd:{count}</h1>
    </div>
  )
}

export default Cmp3