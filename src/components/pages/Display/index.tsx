import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../redux';
import { DefaultDocument } from '../../atoms';
import InvoiceDetails from '../InvoiceDetails';

const Display: React.FunctionComponent = () => {
    const isCurrentlySelctedInvoice = useSelector(
        (state: ReduxState) => state.invoiceReducer.currentlySelectedDocumentId
    );
    return (
        <>
            {isCurrentlySelctedInvoice !== null ? <InvoiceDetails /> : <DefaultDocument />}
        </>
    );
};

export default Display;
