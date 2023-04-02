import React,{useState} from 'react';

const Counter=(Wrapped)=>{
function Counter(props) {
    const [count,setCount]=useState(0)
    const counters = ()=>{
        setCount(count+1);
    }
    return (
        <div>
            <Wrapped count={count} counters={counters} />
        </div>
    );
}
return Counter;
}
export default Counter;