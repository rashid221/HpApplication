import React,{useState} from 'react';
import Counter from './Counter';

function B(props){
    const {counters,count} = props;
    return(<>
    <button onMouseOver={counters}>B {count} onMouseOver</button>
    </>)
}
export default Counter(B);