import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:'space-between',backgroundColor:"greenyellow",padding:"15px 5px"}}>
            <span className='logo'>Redux Store</span>
            <div>
                <Link className="navLink" to='/'>Home</Link>
                <Link className="navLink" to='/cart'>Cart</Link>
            </div>
            <span className='cartCount'>Cart Items: 0</span>
        </div>
    );
};

export default Navbar;