import React from 'react';
import { ListGroup } from 'reactstrap';
import Customer from './Customer';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CustomerList = () => {
    return (
        <>
            <h1 className='page-header'>Customers</h1>
            <ListGroup>
                {array.map(
                    x => <Customer id={x} info={'put customer info here'} />
                )}
            </ListGroup>
        </>
    );
}

export default CustomerList;