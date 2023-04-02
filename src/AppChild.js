import React from 'react';
import AppGrandChild from './AppGrandChild';

function AppChild(props) {
    return (
        <div>
            
          <h1>App Child</h1>            
          <AppGrandChild/>
        </div>
    );
}          

export default AppChild;