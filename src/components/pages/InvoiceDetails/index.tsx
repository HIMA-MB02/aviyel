import React from 'react';
import './styles.css';
import { InvoiceDocument } from '../../atoms';
import { InvoiceDocumentMeta } from '../../containers';

const InvoiceDetails: React.FunctionComponent = () => {
    return (
        <div className='id-container'>
            <div className='iv-title'>
                <h6 className='text-secondary iv-title-text'>
                    INVOICE DETAILS
                </h6>
            </div>
            <InvoiceDocument>
                <InvoiceDocumentMeta id={223} timestamp={(new Date()).toUTCString()} createdForName='Himanshu Ganapavarapu' createdForEmail='himanshu.ganpa@gmail.com' />
            </InvoiceDocument>
        </div>
    );
};

export default InvoiceDetails;
