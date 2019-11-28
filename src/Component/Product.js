import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';

class Product extends Component {
     render() {
         const {id,title,img,price,inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={console.log('clicked')}>
                    <Link to="/details">
                        <img src={img} alt="product" className="card-img-top"/>
                    </Link>
                    <button className="cart-btn" disabled={inCart ? true : false}
                    onClick={() => {
                        console.log('Add to cart');
                    }}
                    >
                    {inCart ? (
                        <p className="text-capitalize mb-0" disabled>{""}in Chart</p>
                    ):(
                        <i className="fas fa-cart-plus"></i>
                    )}
                    </button> 
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">{title}</p>
                    <h5 className="text-blue font-italic mb-0"> 
                        <span className="mr-1">Rp.</span>{price}
                    </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

export default Product;

const ProductWrapper = styled.div``;
