import React from 'react';
import { InvoiceDocument } from '..';

const DefaultDocument: React.FunctionComponent = () => {
    return (
        <div className="id-container">
            <InvoiceDocument>
                Please select an invoice to view the document here.
            </InvoiceDocument>
        </div>
    );
};

export default DefaultDocument;
