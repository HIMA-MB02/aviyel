import React from 'react';
import CustomerDetailsModal from '../CustomerDetailsModal';
import Plus from './plus-white.png';
import './styles.css';

const FloatingAddButton: React.FunctionComponent = () => {
    return (
        <>
            <button
                type='button'
                className='btn btn-primary floating-add'
                data-toggle='modal'
                data-target='#addInvoiceModal'
            >
                <img src={Plus} alt='add' />
            </button>
            <CustomerDetailsModal id={'addInvoiceModal'} title={'Create New Invoice'} />
        </>
    );
};

export default FloatingAddButton;
