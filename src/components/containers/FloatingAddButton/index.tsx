import React from 'react';
import CustomerDetailsModal from '../CustomerDetailsModal';
import InvoiceItemsModal from '../InvoiceItemsModal';
import Plus from './plus-white.png';
import './styles.css';

const FloatingAddButton: React.FunctionComponent = () => {
    return (
        <>
            <button
                type='button'
                className='btn btn-primary floating-add'
                data-toggle='modal'
                data-target='#customerDetailsModal'
            >
                <img src={Plus} alt='add' />
            </button>
            <CustomerDetailsModal id={'customerDetailsModal'} title={'Create New Invoice'} />
            <InvoiceItemsModal id={'addInvoiceModal'} title={'Create New Invoice'} />
        </>
    );
};

export default FloatingAddButton;
