import React, { useCallback, useState } from 'react';
import Child from './Child';

function Parent(){
    const [count,setCount]=useState(0);
    const [alpha,setAlpha]=useState(0);
    const generator = useCallback(()=>{
        console.log(count,alpha);
        return count + alpha;

    },[count])
    
    return (<>
    <h2>Count and {count}</h2>
    <h2>Alpha and {alpha}</h2>
    <button onClick={()=>{setCount(count+1)}}>Update Count</button>
    <button onClick={()=>{setAlpha(alpha+2)}}>alpha Count</button>
    <Child gene={generator}/>
    </>) 
}
export default Parent;