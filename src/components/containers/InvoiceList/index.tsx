import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoiceList, ReduxState } from '../../../redux';
import { IInvoiceList } from '../../../redux/reducers/types';
import InvoiceListSkeleton from '../../../skeletons/InvoiceListSkeleton';
import { InvoiceListItem, Search } from '../../atoms';

const InvoiceList: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const invoiceListRedux = useSelector(
        (state: ReduxState) => state.invoiceReducer.invoiceList
    );
    const searchValue = useSelector(
        (state: ReduxState) => state.invoiceReducer.searchValue
    );
    const [invoiceList, setInvoicList] = React.useState<IInvoiceList[]>([]);

    React.useEffect(() => {
        dispatch(fetchInvoiceList());
    }, []);

    React.useEffect(() => {
        setInvoicList(
            invoiceListRedux.filter(
                (invoice) => invoice.id.toString().includes(searchValue.trim())
            )
        );
    }, [invoiceListRedux, searchValue]);

    return (
        <>
            <Search />
            <hr />
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
