import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state =>state.cart);
    // localStorage.setItem("user",JSON.stringify(products))
    const handleRemove=(productId)=>{
     dispatch(remove(productId))
  
    }
    let arrays = [];

    products.map((product)=>{
           arrays.push(product.price)
          }
  
    )
        return (
        <div>
            <h2 style={{marginTop:'20px',textAlign:'center'}}>Added Products in Cart</h2>
            <hr></hr>
            <div className='centralised-data'>
            <div className='cartWrapper'>
                {
                    products.map(product=>(
                        <div className='cardCart' key={product.id}>
                            <img src={product.image} alt=""/>
                            <h5>{product.title}</h5>
                            <h5>Price: ${product.price}</h5>
                            <button className='btn btn-warning' onClick={()=>handleRemove(product.id)}>Remove</button>
                        </div>
                    ))
                }

            </div>
            <div className='checkout'>
            <h3>Price Details</h3>
            <hr></hr>
            {
                    products.map(product=>(
                        <div style={{display:'flex',justifyContent:'space-between'}} key={product.id}>
                            <h5>Price </h5><span>${product.price}</span>
                            
                           </div>
                    ))
                }
                <hr></hr>
                 <h5>({products.length} items)</h5>
                 <div style={{display:'flex',justifyContent:'space-between'}}>
                 <h5>Total Amount in Rupees : </h5><span>₹{
                     arrays.reduce(function(acc,curr){
                        acc=acc+curr;
                        return Math.round(acc*81.98);
                       },0)
                    }
                    </span>
                 
                 <h5>Total Amount : </h5><span>${
                     arrays.reduce(function(acc,curr){
                        acc=acc+curr;
                        return acc;
                       },0)
                    }
                    </span>
                                    
                                     
                                     </div>
                                     <hr></hr>
                 <button className='btn btn-warning'>Place order</button>
            </div>
            </div>
        </div>
    );
};

export default Cart;