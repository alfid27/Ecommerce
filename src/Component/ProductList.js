import React, { Component } from 'react';
import Title from './Title';

import Product from './Product';

class ProductList extends Component {
    state={
        products: []
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">

                        </div>
                    </div>
                </div>
            </React.Fragment>

            // <div>
            //     <Product/>
            // </div>
        );
    }
}

export default ProductList