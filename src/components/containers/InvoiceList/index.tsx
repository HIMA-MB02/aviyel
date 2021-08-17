import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoiceList, ReduxState } from '../../../redux';
import { InvoiceListItem } from '../../atoms';

const InvoiceList: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const invoiceList = useSelector<ReduxState>((state) => state);
    console.log(invoiceList);
    React.useEffect(() => {
        dispatch(fetchInvoiceList());
    }, []);
    return (
        <>
            {[
                {
                    id: 232,
                    timestamp: new Date().toLocaleString(),
                    itemsCount: 1,
                    createdBy: 'Himanshu Ganapavarapu',
                    amount: 5000
                }
            ].map((invoice, index) => (
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
