import React from 'react';
import { useSelector } from 'react-redux';
import { InvoiceDocument, ErrorDocument } from '..';
import { ReduxState } from '../../../redux';

const DefaultDocument: React.FunctionComponent = () => {
    const isCurrentlySelctedInvoiceError = useSelector(
        (state: ReduxState) =>
            state.invoiceReducer.currentlySelectedDocumentError
    );
    return (
        <div className='id-container'>
            <InvoiceDocument>
                {isCurrentlySelctedInvoiceError !== null
                    ? (
                        <ErrorDocument
                            errorMessage={isCurrentlySelctedInvoiceError}
                        />
                    )
                    : (
                        <div>
                            Please select an invoice to view the document here.
                        </div>
                    )}
            </InvoiceDocument>
        </div>
    );
};

export default DefaultDocument;
