import React from 'react';
import Army from './withArm';

const Sohil = (props) =>{
   
    return(<>
     <h1>Camp: {props.camp}</h1>
    <h1 onMouseOver={props.hochandlers}>Sonam {props.hocname}  {props.hocShots}</h1>
    </>)
}
export default Army(Sohil,10);