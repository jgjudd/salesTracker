﻿import React from 'react';
import { ListGroup } from 'reactstrap';
import Product from './Product';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ProductList = () => {
    return (
        <>
            <h1 className='page-header'>Products</h1>
            <ListGroup>
                {array.map(
                    x => <Product id={x} info={'put product info here'} />
                )}
            </ListGroup>
        </>
    );
}

export default ProductList;