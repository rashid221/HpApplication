import React, { useEffect, useState,useRef } from 'react';

const UseCo = ()=>{
    const [count,setCount]=useState(0);
    const myElem = useRef("");
    const youElem = useRef("");
    const headref = useRef("");
    const handler =(e)=>{
        
        console.log(myElem.current.value=1000);
        myElem.current.style.color= 'red';
        youElem.current.value=1000
        youElem.current.style.color='blue';
        console.log(headref.current.innerText='');
    }
    
    useEffect(()=>{
        setCount(count+1)
    },[])
    return(<>
    <input ref={myElem} type="text"/>
    <h1 ref={headref}>Hello</h1>
    <input type='text' ref={youElem}/>
    <button onClick={handler}>submit</button>

    </>)
}
export default UseCo;