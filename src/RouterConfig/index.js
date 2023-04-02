import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomeContainer from '../Container/Home';
import LoginContainer from '../Container/Login';
import UserContainer from '../Container/User';
import HeaderContainer from '../Components/Header';
import FooterContainer from '../Components/Footer';

function RouterConfigCompo(props) {
    return (
        <div>
        <BrowserRouter>
        <HeaderContainer/>
        <Routes>
            <Route path="/" element={<HomeContainer/>} />
            <Route path="/login" element={<LoginContainer/>} />
            <Route path="/user" element={<UserContainer/>} />
        </Routes>
        <FooterContainer/>
        </BrowserRouter>
        </div>
    );
}

export default RouterConfigCompo;