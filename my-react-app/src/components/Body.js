import React from "react";
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import Electro from "./Electronics";
const Body = () => {
    return(
        <div>
        <Header/>
        <Cart/>
        <Electro/>
        <Footer/>
        </div>
    );
};

export default Body;