import React from 'react';
import Army from './withArm';

const Rahul = (props)=>{
    
    return(<>
    <h1>Camp: {props.camp}</h1>
    <h1 onMouseOver={props.hochandlers}> {props.hocname} Rahul {props.hocShots}</h1>
    </>)
}
export default Army(Rahul,20); 