import React from 'react';
import './styles.css';

const InvoiceDocumentTable: React.FunctionComponent = () => {
    return (
        <table className='table table-hover table-light'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col' className='table-item-name'>
                        ITEM
                    </th>
                    <th scope='col'>QUANTITY</th>
                    <th scope='col'>PRICE</th>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td scope='col'>#</td>
                    <td>ITEM</td>
                    <td>QUANTITY</td>
                    <td>PRICE</td>
                </tr>
            </tbody>
        </table>
    );
};

export default InvoiceDocumentTable;
