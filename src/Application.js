import React, { useRef } from 'react';
import ApplicationChild from './ApplicationChild';

function Application(props) {
    const reforward = useRef("");
    const handle=()=>{
       console.log(reforward.current.value="sahil");
    }
    return (
        <div>
            <h1>Application</h1>
            <ApplicationChild ref={reforward}/>
            <button onClick={handle}>Login</button>
        </div>
    );
}
<h1>Application</h1>
export default Application;