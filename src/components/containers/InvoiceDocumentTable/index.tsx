import React from 'react';
import { InvoiceDocumentRow } from '../../atoms';
import './styles.css';
import { IInvoiceDocumentTable } from './types';

const InvoiceDocumentTable: React.FunctionComponent<IInvoiceDocumentTable> = ({
    items
}) => {
    return (
        <table className='table table-light'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col' className='table-item-name'>
                        ITEM
                    </th>
                    <th scope='col' className='td-center'>
                        QUANTITY
                    </th>
                    <th scope='col' className='td-center'>
                        UNIT PRICE
                    </th>
                    <th scope='col' className='td-center'>
                        PRICE
                    </th>
                </tr>
            </thead>
            <tbody>
                {items.map((invoiceItem, index) => (
                    <InvoiceDocumentRow
                        key={`invoice-item-${index}`}
                        index={index}
                        {...invoiceItem}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default InvoiceDocumentTable;
