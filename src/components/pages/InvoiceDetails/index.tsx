import React from 'react';
import './styles.css';
import { InvoiceDocument } from '../../atoms';
import { InvoiceDocumentMeta, InvoiceDocumentTable } from '../../containers';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../redux';

const InvoiceDetails: React.FunctionComponent = () => {
    const currentDocument = useSelector(
        (state: ReduxState) =>
            state.invoiceReducer.invoiceDocumentList.filter(
                (document) =>
                    document.meta.id ===
                    state.invoiceReducer.currentlySelectedDocumentId
            )[0]
    );

    return (
        <div className='id-container'>
            <div className='iv-title'>
                <h6 className='text-secondary iv-title-text'>
                    INVOICE DETAILS
                </h6>
            </div>
            <InvoiceDocument>
                <InvoiceDocumentMeta
                    id={currentDocument.meta.id}
                    timestamp={currentDocument.meta.timestamp}
                    createdForName={currentDocument.meta.customerName}
                    createdForEmail={currentDocument.meta.customerEmail}
                />
                <InvoiceDocumentTable />
            </InvoiceDocument>
        </div>
    );
};

export default InvoiceDetails;
