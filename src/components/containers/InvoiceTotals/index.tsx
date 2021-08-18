import React from 'react';
import './styles.css';
import { IInvoiceTotals } from './types';

const InvoiceTotals: React.FunctionComponent<IInvoiceTotals> = ({ subTotal, tax, discount, grandTotal }) => {
    return (
        <div className='align-right'>
            <div className='totals-container'>
                <div className='totals-row'>
                    <div className='totals-title'>Sub Total</div>
                    <div className='totals-value'>{subTotal}</div>
                </div>
                <div className='totals-row'>
                    <div className='totals-title'>Tax</div>
                    <div className='totals-value'>{tax}</div>
                </div>
                <div className='totals-row'>
                    <div className='totals-title'>Discount</div>
                    <div className='totals-value'>{discount}</div>
                </div>
                <div className='totals-row'>
                    <div className='totals-title grand-total'>Grand Total</div>
                    <div className='totals-value'>{grandTotal}</div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceTotals;
