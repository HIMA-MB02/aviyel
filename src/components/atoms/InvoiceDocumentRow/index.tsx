import React from 'react';
import { IInvoiceItem } from '../../../redux/reducers/types';

const InvoiceDocumentRow: React.FunctionComponent<IInvoiceItem> = ({
    index,
    itemName,
    itemQuantity,
    itemUnitPrice,
    itemPrice
}) => {
    // css for the current tr is present in parent component InvoiceDocumentTable
    return (
        <tr className='table-body'>
            <td scope='col'>{index ? index + 1 : 1}</td>
            <td>{itemName}</td>
            <td className='td-center'>{itemQuantity}</td>
            <td className='td-center'>{itemUnitPrice}</td>
            <td className='td-center'>{itemPrice}</td>
        </tr>
    );
};

export default InvoiceDocumentRow;
