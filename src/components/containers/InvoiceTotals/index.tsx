import React from 'react';
import { formatRupee } from '../../../utils/utility';
import './styles.css';
import { IInvoiceTotals } from './types';

const InvoiceTotals: React.FunctionComponent<IInvoiceTotals> = ({ subTotal, tax, discount, grandTotal }) => {
    return (
        <div className='align-right'>
            <div className='totals-container'>
                <div className='totals-row'>
                    <div className='totals-title'>Sub Total</div>
                    <div className='totals-value'>{formatRupee(subTotal)}</div>
                </div>
                <div className='totals-row'>
                    <div className='totals-title'>Tax</div>
                    <div className='totals-value'>{formatRupee(tax)}</div>
                </div>
                <div className='totals-row'>
                    <div className='totals-title'>Discount</div>
                    <div className='totals-value'>{formatRupee(discount)}</div>
                </div>
                <div className='totals-row'>
                    <div className='totals-title grand-total'>Grand Total</div>
                    <div className='totals-value'>{formatRupee(grandTotal)}</div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceTotals;
