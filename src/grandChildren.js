import React,{useContext} from 'react';
import { globalInfo } from './App';

const grandChildren = () => {
    let {appColor} = useContext(globalInfo);
    console.log("Now", appColor);
    return (
        <div>
            <h1>Grand Children</h1>
        </div>
    );
};

export default grandChildren;