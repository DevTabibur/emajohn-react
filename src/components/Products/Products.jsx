import React from 'react';
import './Products.css'

const Products = (props) => {
    console.log(props.product);
    const {name, img, price, ratings, seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="product__img"></img>

            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings} stars</small></p>
            </div>
             <button className='btn-cart'>
                 <p>Add to Cart</p>
             </button>
        </div>
    );
};

export default Products;