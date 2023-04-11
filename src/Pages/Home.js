import React from 'react';
import Products from '../Components/Products';

const Home = () => {
    return (
        <div className='centered-elem'>
            <h2 style={{marginTop:"20px"}}>Welcome to the London Fox Luxury clothing store</h2>
            <hr></hr>
            <h3>Products</h3>
                
            <section className='align-products'>
                
                <Products/>
            </section>
        </div>
    );
};

export default Home;