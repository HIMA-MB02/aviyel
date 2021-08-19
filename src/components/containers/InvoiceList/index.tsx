import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchInvoiceList,
    ReduxState
} from '../../../redux';
import { IInvoiceList } from '../../../redux/reducers/types';
import InvoiceListSkeleton from '../../../skeletons/InvoiceListSkeleton';
import { InvoiceListItem, Search } from '../../atoms';

const InvoiceList: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const invoiceListRedux = useSelector(
        (state: ReduxState) => state.invoiceReducer.invoiceList
    );
    const isInvoiceListLoading = useSelector(
        (state: ReduxState) => state.invoiceReducer.invoiceListLoading
    );
    const searchValue = useSelector(
        (state: ReduxState) => state.invoiceReducer.searchValue
    );
    const [invoiceList, setInvoicList] = React.useState<IInvoiceList[]>([]);

    React.useEffect(() => {
        dispatch(fetchInvoiceList());
    }, []);

    React.useEffect(() => {
        if (searchValue) {
            setInvoicList(
                invoiceListRedux.filter((invoice) =>
                    invoice.id.toString().includes(searchValue.trim())
                )
            );
        } else {
            setInvoicList(invoiceListRedux);
        }
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
                    customerName={invoice.customerName}
                    amount={invoice.amount}
                />
            ))}
            {isInvoiceListLoading && <InvoiceListSkeleton times={4} />}
            {!isInvoiceListLoading && !invoiceList.length && <div>Noting found!</div>}
        </>
    );
};

export default InvoiceList;
