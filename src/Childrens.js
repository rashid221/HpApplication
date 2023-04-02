import React,{useContext} from 'react';
import { globalInfo } from './App';

const Childrens = () => {
    let {appColor} = useContext(globalInfo);
    console.log(appColor);
    return (
        <div>
            <h1 style={{color:appColor}}>Children sections</h1>
            
       </div>
    );
};

export default Childrens;