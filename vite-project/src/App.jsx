import React from 'react'
import { useState,useEffect } from 'react';

const App = () => {
  const [count, setCount]=useState(0);
  
  function increment(val){
    setCount(count+val);
    console.log(count);
  }

  function decrement(val) {
    setCount(count-val);
  }
  
  useEffect(()=>{
    
    for(let i=0;i<1000000000;i++){
      let a=i; 
    }
  },[])
  return (
   <>
    <h1>Our App</h1>
    <p>Count : {count}</p>
    <button onClick={()=>increment(5)}>increase</button><br></br>
    <button onClick={()=>decrement(4)}>Decrease</button>
   </>
  )
  
}

export default App