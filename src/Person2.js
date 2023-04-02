import React,{useState} from 'react';

const Person2 = ()=>{
    const [money,setMoney]=useState(10)
    const handleIncrement=()=>{
        setMoney(money*2);
    }
    return(<>
    <h1>jiggy offering ${money}</h1>
    <button onClick={handleIncrement}>Send Money</button>
    </>)
}
export default Person2;