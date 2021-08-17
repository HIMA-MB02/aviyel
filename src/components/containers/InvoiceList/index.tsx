import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoiceList, ReduxState } from '../../../redux';
import InvoiceListSkeleton from '../../../skeletons/InvoiceListSkeleton';
import { InvoiceListItem } from '../../atoms';

const InvoiceList: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const invoiceList = useSelector(
        (state: ReduxState) => state.invoiceReducer.invoiceList
    );
    React.useEffect(() => {
        dispatch(fetchInvoiceList());
    }, []);
    return (
        <>
            {invoiceList.map((invoice, index) => (
                <InvoiceListItem
                    key={`invoice-list-${index}`}
                    id={invoice.id}
                    timestamp={invoice.timestamp}
                    itemsCount={invoice.itemsCount}
                    createdBy={invoice.createdBy}
                    amount={invoice.amount}
                />
            ))}
            {!invoiceList.length && <InvoiceListSkeleton times={4} />}
        </>
    );
};

export default InvoiceList;
