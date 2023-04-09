import React from 'react';
import Products from '../Components/Products';

const Home = () => {
    return (
        <div className='centered-elem'>
            <h2>Welcome to the redux toolkit store</h2>
            <h3>Products</h3>
                
            <section className='align-products'>
                
                <Products/>
            </section>
        </div>
    );
};

export default Home;