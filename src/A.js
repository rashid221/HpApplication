import React, { useState } from 'react';
import Counter from './Counter';

function A(props){
    const {counters,count} = props;
    return(<>
    <button onClick={counters}>A {count} Click</button>
    </>)
}
export default Counter(A);