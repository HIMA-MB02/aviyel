import React from 'react';
import { getDateTime } from '../../../utils/utility';
import './styles.css';
import { IInvoiceDocumentMeta } from './types';

const InvoiceDocumentMeta: React.FunctionComponent<IInvoiceDocumentMeta> = ({
    id,
    timestamp,
    createdForName,
    createdForEmail
}) => {
    return (
        <div className='meta-container'>
            <div className='inv-date'>
                <h4 className='text-black'>INVOICE</h4>
                <h4 className='text-muted'># INV{id}</h4>
                <p className='text-muted'>{getDateTime(timestamp)}</p>
            </div>
            <div className='customer-print'>
                <div className='customer'>
                    <h6 className='text-muted'>CUSTOMER DETAILS</h6>
                    <h6 className='text-black customer-name-text'>
                        {createdForName}
                    </h6>
                    <h6 className='text-muted'>{createdForEmail}</h6>
                </div>
                <div>
                    <button
                        type='button'
                        className='btn btn-outline-primary ml-4 mr-4'
                    >
                        PRINT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvoiceDocumentMeta;
