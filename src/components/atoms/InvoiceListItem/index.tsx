import React from 'react';
import { getDateTime } from '../../../utils/utility';
import './styles.css';
import { IInvoiceListItem } from './types';

const InvoiceListItem: React.FunctionComponent<IInvoiceListItem> = ({
    id,
    timestamp,
    itemsCount,
    createdBy,
    amount
}) => {
    return (
        <>
            <div className='list-row'>
                <div className='listA'>
                    <div className='list-row-item list-row-title'>
                        INV. # - {id}
                    </div>
                    <div className='list-row-item'>Items - {itemsCount}</div>
                    <div className='list-row-item text-primary'>{createdBy}</div>
                </div>
                <div className='listB'>
                    <div className='list-row-item'>{getDateTime(timestamp)}</div>
                    <div className='list-row-item list-row-title'>{amount}</div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default InvoiceListItem;
