import React from 'react';

export default function SampleComponent(props){
    return(<>
    <h1>{props.name} Sample Component</h1>
    </>)
}
 

const HocFunction=(Component)=>{
return ((props)=>(
    <div style={{padding:'20px',backgroundColor:'red'}}>
    <Component {...props}/>
    </div>
)
) 
  
}

const HOC = HocFunction(SampleComponent);

export {HOC}