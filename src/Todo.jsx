import React, { memo } from 'react';

const Todo =({todo,addNew})=>{
    console.log("todo list render")
    return (<>
       <h1>Todo</h1>
    </>)
}
export default memo(Todo);