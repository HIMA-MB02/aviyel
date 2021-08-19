import React from 'react';
import { InvoiceDocument } from '../../components/atoms';
import SkeletonBase from '../SkeletonBase';
import './styles.css';

const DocumentSkeleton: React.FunctionComponent = () => {
    return (
        <InvoiceDocument>
            <div className='meta-container'>
                <div className='inv-date'>
                    <h4 className='text-black'>INVOICE</h4>
                    <h4 className='text-muted'>
                        <SkeletonBase type='text inv-sk-number' />
                    </h4>
                    <p className='text-muted'>
                        <SkeletonBase type='text inv-sk-timestamp' />
                    </p>
                </div>
                <div className='customer-print'>
                    <div className='customer'>
                        <h6 className='text-muted'>CUSTOMER DETAILS</h6>
                        <h6 className='text-black customer-name-text'>
                            <SkeletonBase type='text customer-sk-name' />
                        </h6>
                        <h6 className='text-muted customer-sk-email'>
                            <SkeletonBase type='text' />
                        </h6>
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
            <table className='table table-hover table-light'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col' className='table-item-name'>
                            ITEM
                        </th>
                        <th scope='col' className='td-center'>
                            QUANTITY
                        </th>
                        <th scope='col' className='td-center'>
                            UNIT PRICE
                        </th>
                        <th scope='col' className='td-center'>
                            PRICE
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-body'>
                        <td scope='col'>
                            <SkeletonBase type='text' />
                        </td>
                        <td>
                            <SkeletonBase type='text customer-sk-name' />
                        </td>
                        <td className='td-center'>
                            <SkeletonBase type='text' />
                        </td>
                        <td className='td-center'>
                            <SkeletonBase type='text' />
                        </td>
                        <td className='td-center'>
                            <SkeletonBase type='text' />
                        </td>
                    </tr>
                    <tr className='table-body'>
                        <td scope='col'>
                            <SkeletonBase type='text' />
                        </td>
                        <td>
                            <SkeletonBase type='text customer-sk-name' />
                        </td>
                        <td className='td-center'>
                            <SkeletonBase type='text' />
                        </td>
                        <td className='td-center'>
                            <SkeletonBase type='text' />
                        </td>
                        <td className='td-center'>
                            <SkeletonBase type='text' />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='align-right'>
                <div className='totals-container'>
                    <div className='totals-row'>
                        <div className='totals-title'>Sub Total</div>
                        <div className='totals-value'>
                            <SkeletonBase type='text inv-sk-totals' />
                        </div>
                    </div>
                    <div className='totals-row'>
                        <div className='totals-title'>Tax</div>
                        <div className='totals-value'>
                            <SkeletonBase type='text inv-sk-totals' />
                        </div>
                    </div>
                    <div className='totals-row'>
                        <div className='totals-title'>Discount</div>
                        <div className='totals-value'>
                            <SkeletonBase type='text inv-sk-totals' />
                        </div>
                    </div>
                    <div className='totals-row'>
                        <div className='totals-title grand-total'>
                            Grand Total
                        </div>
                        <div className='totals-value'>
                            <SkeletonBase type='text inv-sk-totals' />
                        </div>
                    </div>
                </div>
            </div>
        </InvoiceDocument>
    );
};

export default DocumentSkeleton;
