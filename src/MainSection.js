import React from 'react';

function MainSection(props) {
    return (
        <div>
           <div className='section-main'>
            <h1 style={{zIndex:999}}>Welcome {props.userdatas}</h1> 
            <hr></hr>
           <div>
            <h3>Bank Details of {props.userdatas}</h3>
            <p>Account Holder name : Mohd Rashid</p>
            <p>Account number : X2434343XXXX</p>
            <p>IFSC Code : SBIN001234</p>
            <p>Bank Name: State Bank of India</p>
            
            </div>
            </div>
        </div>
    );
}

export default MainSection;