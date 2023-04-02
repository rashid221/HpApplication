import React, { useReducer } from 'react';


const initialState = {
    backgroundColor:"blue"
};

const reducer = (state,action)=>{
    console.log(state,action);
    if(action.type==="Increment"){
        return {backgroundColor:"yellow"}
    }
    else if(action.type==="Decrement"){
        return {backgroundColor:"green"}
    }
    else if(action.type==="Theme"){
        return {backgroundColor:"red"}
    }
    return state;
}

function Pass(props) {
    const [state,dispatch]=useReducer(reducer,initialState);
    return (
        <div>
            <div className='head-set'>
                <div className='centralised'>
            <h1 style={state}>hello</h1>
            </div>
            </div>
            <button onClick={()=>dispatch({type:"Increment"})}>Increase</button>
            <button onClick={()=>dispatch({type:"Decrement"})}>Decrease</button>
            <button onClick={()=>dispatch({type:"Theme"})}>Theme</button>
            <select onChange={(e)=>{
                if(e.target.value==="red"){
                    dispatch({type:"Theme"})
                }
                else if(e.target.value==="yellow"){
                    dispatch({type:"Increment"})
                }
                else if(e.target.value==="blue"){
                    dispatch({type:"Decrement"})
                }
            }} class="form-select" aria-label="Default select example">
  <option >Select Theme</option>
  <option value="red">red</option>
  <option value="yellow">yellow</option>
  <option selected  value="blue">blue</option>
</select>
        </div>
    );
}

export default Pass;
