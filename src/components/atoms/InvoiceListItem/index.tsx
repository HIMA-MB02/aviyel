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
                    <div className='list-row-item'>
                        <p>Items - {itemsCount}</p>
                    </div>
                    <div className='list-row-item text-primary'>
                        <p>{customerName}</p>
                    </div>
                </div>
                <div className='listB'>
                    <div className='list-row-item'>
                        <p>{getDateTime(timestamp)}</p>
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
