import React from 'react';
import SalesPerson from './SalesPerson';
import { ListGroup } from 'reactstrap';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SalesPeopleList = () => {
    return (
        <>
            <h1 className='page-header'>Sales Team</h1>
            <ListGroup>
                {
                    array.map(x => <SalesPerson id={x} info={'details'} />)
                }
            </ListGroup>
        </>
    )
}

export default SalesPeopleList;
