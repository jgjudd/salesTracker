import React, { useState } from 'react';
import { Table, Collapse } from 'reactstrap';
import Sale from './Sale';

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const data = [
    { Product: 'Bat', SalesPerson: 'Joe', Customer: 'Bryan', Date: '10/10/2020' },
    { Product: 'Glove', SalesPerson: 'Moe', Customer: 'Dave', Date: '10/10/2020' },
    { Product: 'Ball', SalesPerson: 'Joe', Customer: 'Ryan', Date: '10/10/2020' },
    { Product: 'Bat', SalesPerson: 'Sarah', Customer: 'George', Date: '10/10/2020' },
    { Product: 'Ball', SalesPerson: 'Joe', Customer: 'Jessica', Date: '10/10/2020' },
    { Product: 'Bat', SalesPerson: 'Bill', Customer: 'Jose', Date: '10/10/2020' },
    { Product: 'Glove', SalesPerson: 'Joe', Customer: 'Bryan', Date: '10/10/2020' },
    { Product: 'Bat', SalesPerson: 'Jane', Customer: 'Bryan', Date: '10/10/2020' },
    { Product: 'Glove', SalesPerson: 'Joe', Customer: 'Juan', Date: '10/10/2020' },
    { Product: 'Bat', SalesPerson: 'Joe', Customer: 'Julie', Date: '10/10/2020' }
];

const SalesList = () => {
    const [filterValue, setFilterValue] = useState(null);
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <h1 className='page-header'>Previous Sales</h1>
            <input onChange={(e) => setFilterValue(e.target.value)} />
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Cancel' : 'New Sale'}</button>
            <Collapse isOpen={isOpen}>
                <label>Product</label>
                <input />
                <label>Sales Person</label>
                <input />
                <label>Customer</label>
                <input />
                <label>Date</label>
                <input />

                <button>Add Sale</button>
            </Collapse>
            <Table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Sales Person</th>
                        <th>Customer</th>
                        <th>Sale Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .filter(
                            x => {
                                if (!filterValue) return true 
                                if (x.Product.includes(filterValue) ) {
                                    return true
                                }
                                if (x.SalesPerson.includes(filterValue) ) {
                                    return true
                                }
                                if (x.Customer.includes(filterValue) ) {
                                    return true
                                }
                                if (x.Date.includes(filterValue) ) {
                                    return true
                                }
                            }
                        )
                        .map(
                            x => <Sale id={x.Product} details={x} />
                        )
                    }
                </tbody>
            </Table>
        </>
    );
}

export default SalesList;