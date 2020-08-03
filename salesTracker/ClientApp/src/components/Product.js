import React, { useState } from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';

const Product = ({ id, info }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <ListGroupItem>
            <div>Content for product: {id}</div>
            <button onClick={() => setIsOpen(!isOpen)}> Toggle</button>
            <Collapse isOpen={isOpen}>
                <p>Product {id + 100}</p>
                <p>Name</p>
                <p>Manufacturer</p>
                <p>Style</p>
                <p>Purchase Price</p>
                <p>Sales Price</p>
                <p>Quantity</p>
                <p>Commission %</p>
                <button>Save Changes</button>
            </Collapse>
        </ListGroupItem>
    )
}

export default Product;
