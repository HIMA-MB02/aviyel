import React from 'react';
import './styles.css';
import { IInvoiceListItem } from './types';

const InvoiceListItem: React.FunctionComponent<IInvoiceListItem> = ({
    invoiceNumber,
    timestamp,
    itemsCount,
    createdBy,
    amount
}) => {
    return (
        <div className='list'>
            <div className='listA'>
                <div className='list-item'>INV. # - {invoiceNumber}</div>
                <div className='list-item'>Items - {itemsCount}</div>
                <div className='list-item'>{createdBy}</div>
            </div>
            <div className='listB'>
                <div className='list-item'>{timestamp}</div>
                <div className='list-item'>{amount}</div>
            </div>
        </div>
    );
};

export default InvoiceListItem;
