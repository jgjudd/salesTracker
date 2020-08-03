import React, { useState } from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';

const Customer = ({ id, info }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <ListGroupItem>
            <div>Content for customer: {id}</div>
            <button onClick={() => setIsOpen(!isOpen)}> Toggle</button>
            <Collapse isOpen={isOpen}>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Address</p>
                <p>Phone</p>
                <p>Start Date</p>                
            </Collapse>
        </ListGroupItem>
    )
}

export default Customer;
