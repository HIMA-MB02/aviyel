import React from 'react';
import './styles.css';
import SkeletonBase from '../SkeletonBase';

// As this is being mounted only after Invoice List, we do not need to redeclare the css here.
// They are using the same css classes as of InvoiceListItem
export const ILRow: React.FunctionComponent = () => {
    return (
        <div className='list-row'>
            <div className='listA'>
                <div className='list-row-item list-row-title'>
                    <SkeletonBase type='text invoice-number' />
                </div>
                <div className='list-row-item'>
                    <SkeletonBase type='text invoice-items' />
                </div>
                <div className='list-row-item text-primary'>
                    <SkeletonBase type='text invoice-name' />
                </div>
            </div>
            <div className='listB'>
                <div className='list-row-item'>
                    <SkeletonBase type='text invoice-timestamp' />
                </div>
                <div className='list-row-item list-row-title'>
                    <SkeletonBase type='text invoice-amount' />
                </div>
            </div>
        </div>
    );
};

const InvoiceListSkeleton = ({ times = 20 }) => {
    const mapRow = () => {
        const card = [];
        for (let i = 0; i < times; i++) {
            card.push(<ILRow key={i} />);
        }
        return card;
    };
    return (
        <>
            {mapRow()}
            <hr />
        </>
    );
};

export default InvoiceListSkeleton;
