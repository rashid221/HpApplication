import React, { useState } from "react";
import Loginform from "./Loginform";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import  Navbar  from "./Components/Navbar";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/cart" element={<Cart/>}> </Route>
        </Routes>    
    </BrowserRouter>
      {/* <Loginform /> */}
    </>
  );
};
export default App;
