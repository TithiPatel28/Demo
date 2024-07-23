import React, { useState } from 'react'

export const UseStateDemo = () => {

    const[count,setCount]=useState(0)
    const increaseCount =()=>{
        setCount(count+1);
        console.log("count ",count);
    }
  return (
    <div>
        <h1>Count = {count}</h1>
        <button onClick={()=>{increaseCount()}}>Increase Count</button>
    </div>
  )
}
