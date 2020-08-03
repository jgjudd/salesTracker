import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';

const Sale = ({ id, details }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <tr xs="4">
            <td>{details.Product}</td>
            <td>{details.SalesPerson}</td>
            <td>{details.Customer}</td>
            <td>{details.Date}</td>
        </tr>
    )
}

export default Sale;
