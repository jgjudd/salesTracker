import React, { useState } from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';

const SalesPerson = ({ id }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <ListGroupItem>
            <div>Content for team member: {id}</div>
            <button onClick={ () => setIsOpen(!isOpen) }> Toggle</button>
            <Collapse isOpen={isOpen}>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Address</p>
                <p>Phone</p>
                <p>Start Date</p>
                <p>Termination Date</p>
                <p>Manager</p>
                <button>Save Changes</button>
            </Collapse>
        </ListGroupItem>
    )
}

export default SalesPerson;
