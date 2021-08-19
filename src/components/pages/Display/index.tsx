import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../redux';
import { DefaultDocument } from '../../atoms';
import InvoiceDetails from '../InvoiceDetails';

const Display: React.FunctionComponent = () => {
    const isCurrentlySelctedInvoice = useSelector(
        (state: ReduxState) => state.invoiceReducer.currentlySelectedDocument
    );
    const isCurrentDocmentLoading = useSelector(
        (state: ReduxState) =>
            state.invoiceReducer.currentlySelectedDocumentLoading
    );

    return (
        <>
            {isCurrentlySelctedInvoice !== null || isCurrentDocmentLoading
                ? (
                    <InvoiceDetails />
                )
                : (
                    <DefaultDocument />
                )}
        </>
    );
};

export default Display;
