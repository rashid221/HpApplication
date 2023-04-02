import { useState} from "react";


function useCustomCounter(){
    const [count,setCount]=useState(0);
    function handleCounter(){
        setCount(count + 1);
    }
    return {
        count,
        handleCounter
    }
}
export default useCustomCounter;