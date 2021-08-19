import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDocument, setCurrentDocumentLoading } from '../../../redux';
import { formatRupee, getDateTime } from '../../../utils/utility';
import './styles.css';
import { IInvoiceListItem } from './types';

const InvoiceListItem: React.FunctionComponent<IInvoiceListItem> = ({
    id,
    timestamp,
    itemsCount,
    customerName,
    amount
}) => {
    const dispatch = useDispatch();
    const displayInvoice = (e: React.MouseEvent) => {
        dispatch(setCurrentDocumentLoading(true));
        dispatch(fetchDocument(id));
    };
    return (
        <>
            <div className='list-row' onClick={displayInvoice}>
                <div className='listA'>
                    <div className='list-row-item list-row-title'>
                        INV. # - {id}
                    </div>
                    <div className='list-row-item'>Items - {itemsCount}</div>
                    <div className='list-row-item text-primary'>
                        {customerName}
                    </div>
                </div>
                <div className='listB'>
                    <div className='list-row-item'>
                        {getDateTime(timestamp)}
                    </div>
                    <div className='list-row-item list-row-title'>
                        {formatRupee(amount)}
                    </div>
                </div>
            </div>
            <hr className='list-item-hr' />
        </>
    );
};

export default InvoiceListItem;
