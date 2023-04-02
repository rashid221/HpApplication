import React, { useState } from 'react';

function Keyuser(props) {
    props.named("my name is sahil");
    const [count,setCount]=useState();
    const [email,setEmail]=useState();
    const obj = {}
    const handler=()=>{
        console.log(count);
        obj.name = count;
        obj.email = email;
        console.log(obj);
    } 
    return (
       
        <div style={{backgroundColor:'#587712',textTransform:'uppercase',margin:'10px 0px',boxShadow:'5px 5px 2px 1px white',color:'white',display:'flex',alignItems:'center',justifyContent:'center',width:'100%',padding:'20px',textShadow:'1px 1px 0px black'}}>
               <label style={{margin:'0px 10px'}}>Firstname</label>
                <input type="text" value={count} onChange={(e)=>setCount(e.target.value)} />
                <label style={{margin:'0px 10px'}}>Lastname</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <button onClick={handler}>Submit</button>
           
        </div>
    );
}

export default Keyuser;