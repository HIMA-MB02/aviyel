import React from 'react';
import './styles.css';
import { InvoiceDocument } from '../../atoms';
import {
    InvoiceDocumentMeta,
    InvoiceDocumentTable,
    InvoiceTotals
} from '../../containers';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../redux';
import { DocumentSkeleton } from '../../../skeletons';

const InvoiceDetails: React.FunctionComponent = () => {
    const currentDocument = useSelector(
        (state: ReduxState) => state.invoiceReducer.currentlySelectedDocument
    );
    const isCurrentDocmentLoading = useSelector(
        (state: ReduxState) =>
            state.invoiceReducer.currentlySelectedDocumentLoading
    );

    return (
        <div className='id-container'>
            <h5 className='text-secondary iv-title-text'>INVOICE DETAILS</h5>
            {currentDocument && !isCurrentDocmentLoading && (
                <InvoiceDocument>
                    <InvoiceDocumentMeta
                        id={currentDocument.meta.id}
                        timestamp={currentDocument.meta.timestamp}
                        createdForName={currentDocument.meta.customerName}
                        createdForEmail={currentDocument.meta.customerEmail}
                    />
                    <InvoiceDocumentTable
                        items={currentDocument.invoiceItems}
                    />
                    <InvoiceTotals {...currentDocument.invoiceTotals} />
                </InvoiceDocument>
            )}
            {isCurrentDocmentLoading && <DocumentSkeleton />}
        </div>
    );
};

export default InvoiceDetails;
