import React from 'react';
import './styles.css';

const InvoiceDocument: React.FunctionComponent = ({ children }) => {
    return <div className='document'>{children}</div>;
};

export default InvoiceDocument;
