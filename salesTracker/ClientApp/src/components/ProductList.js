import React, { useState, useEffect } from 'react';
import { ListGroup } from 'reactstrap';
import Product from './Product';

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array = [
    { Name: '', Manufacturer: '', Style: '', purchasePrice: '', salesPrice: '', Quantity: 10, CommisionPercentage: 2 },
    { Name: '', Manufacturer: '', Style: '', purchasePrice: '', salesPrice: '', Quantity: 10, CommisionPercentage: 2 },
    { Name: '', Manufacturer: '', Style: '', purchasePrice: '', salesPrice: '', Quantity: 10, CommisionPercentage: 2 },
    { Name: '', Manufacturer: '', Style: '', purchasePrice: '', salesPrice: '', Quantity: 10, CommisionPercentage: 2 },
    { Name: '', Manufacturer: '', Style: '', purchasePrice: '', salesPrice: '', Quantity: 10, CommisionPercentage: 2 }
]

async function getData() {
    return await fetch("/api/Product").then(response => console.log(response.json()));
}

const ProductList = () => {

    useEffect(() => {
        const data = getData();
        console.log(data);
    });

    return (
        <>
            <h1 className='page-header'>Products</h1>
            <ListGroup>
                {array
                    .map(
                        x => <Product id={x.Name} details={x} />
                    )
                }
            </ListGroup>
        </>
    );
}

export default ProductList;