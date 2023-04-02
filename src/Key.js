import React from 'react';
import Keyuser from './Keyuser';


function Key(props) {
    const user = [{
        id:1,
        name:'Sahil Jafri'
    },
    {
        id:2,
        name:'Hp Pavilion'
    },
    {
        id:3,
        name:'Asus Tuf Gaming'
    },
    {
        id:4,
        name:'Lenovo'
    },
]
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',textAlign:'center',padding:'10px'}}>
            
             <Keyuser/>
          
                            
        </div>
    );
}

export default Key;