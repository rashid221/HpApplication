import React from 'react';
// import { myContext } from './App';
import { Consumer } from './Context';

function AppGrandChild(props) {
    return (
        <div>
            <Consumer>
           {(item)=>item("hello everyone")}
            </Consumer>
        </div>
    );
}

export default AppGrandChild;