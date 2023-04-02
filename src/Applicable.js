import React, { useEffect, useRef } from 'react';


function Applicable(props) {

    useEffect(()=>{
    firstnameRef.current.focus();
    },[])
    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    const submitRef = useRef(null);
    const firstkeyDown =(e)=>{
        if(e.key === "Enter"){
            lastnameRef.current.focus();
        }
    }
    const lastkeyDown=(e)=>{
        if(e.key === "Enter"){
            submitRef.current.focus();
        }
    }
    const submitkeyDown=(e)=>{
         if(e.key === "Enter"){
            alert("Form submitted successfully");
         }
    }
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <label>First Name</label>
           <input type="text" onKeyDown={firstkeyDown} ref={firstnameRef} placeholder='Enter firstname' />
           <label>Last Name</label>
           <input type="text" onKeyDown={lastkeyDown} ref={lastnameRef} placeholder='Enter lastname'/>
           <br></br>
           <button onKeyDown={submitkeyDown} ref={submitRef} >Submit</button>
        </div>
    );
}

export default Applicable;