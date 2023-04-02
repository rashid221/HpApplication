import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function HeaderContainer(props) {
    return (
        <div>
           <ul className='toNavigation'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/user'>User</Link>
            </li>
           </ul>
        </div>
    );
}

export default HeaderContainer;