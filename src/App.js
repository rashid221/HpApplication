import React, { useState } from "react";
import Loginform from "./Loginform";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import  Navbar  from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/cart" element={<Cart/>}> </Route>
        </Routes>    
    </BrowserRouter>
    </Provider>
      {/* <Loginform /> */}
    </>
  );
};
export default App;
