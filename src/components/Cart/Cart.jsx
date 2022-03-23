import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = total * .1;
    const toFixedTax = tax.toFixed(2);


    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>selected items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${toFixedTax}</p>
            <h4>Total:</h4>
        </div>
    );
};

export default Cart;