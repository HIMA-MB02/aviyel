import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoiceList } from '../../../redux';
import { InvoiceListItem } from '../../atoms';

const InvoiceList: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const invoiceList = useSelector(
        (state) => state.invoiceReducer.invoiceList
    );
    React.useEffect(() => {
        dispatch(fetchInvoiceList());
    }, []);
    return (
        <>
            {invoicesList.map((invoice, index) => (
                <InvoiceListItem
                    key={`invoice-list-${index}`}
                    id={invoice.id}
                    timestamp={invoice.timestamp}
                    itemsCount={invoice.itemsCount}
                    createdBy={invoice.createdBy}
                    amount={invoice.amount}
                />
            ))}
        </>
    );
};

export default InvoiceList;
