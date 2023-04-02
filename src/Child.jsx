import React, { useEffect, useState } from "react";

const Child =({generator})=>{
    const [items,setItems]=useState([])
   useEffect(()=>{
   setItems(generator)
   },[generator])
  return(<>
    <h1>Child comp</h1>
    {items && items.map(item=>{
     <div key={item}>{item}</div>
    })}
    </>)
}
export default React.memo(Child);