import React from 'react';
import './styles.css';
// import { Input } from '../../atoms';
import Modal from '../../atoms/Modal';
import { IInvoiceItemsModal } from './types';
import InvoiceItemsModalTable from '../InvoiceItemsModalTable';

const InvoiceItemsModal: React.FunctionComponent<IInvoiceItemsModal> = ({
    id,
    title
}) => {
    //  onClick={() => dispatch(removeFormData())}
    const onProceed = () => {
        const closeButton = document.getElementById(`${id}-btn`);
        closeButton?.click();
    };

    return (
        <Modal id={id} title={title}>
            <div>
                <div className='sub-title'>
                    <h5>Product Details</h5>
                    <div className='customer'>
                        <h6 className='text-muted'>CUSTOMER DETAILS</h6>
                        <h6 className='text-black customer-name-text'>
                            Himanhshu Ganapavarpu
                        </h6>
                        <h6 className='text-muted'>himanshu.ganpa@gmail.com</h6>
                    </div>
                </div>
                <hr />
                <div className='table-container'>
                    <InvoiceItemsModalTable />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-right'>
                            <button
                                className='btn btn-primary'
                                onClick={onProceed}
                            >
                                Proceed
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default InvoiceItemsModal;
