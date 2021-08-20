import React from 'react';
import './styles.css';
// import { Input } from '../../atoms';
import Modal from '../../atoms/Modal';
import { IInvoiceItemsModal } from './types';
import InvoiceItemsModalTable from '../InvoiceItemsModalTable';
import InvoiceTotalsModal from '../InvoiceTotalsModal';

const InvoiceItemsModal: React.FunctionComponent<IInvoiceItemsModal> = ({
    id,
    title
}) => {
    return (
        <Modal id={id} title={title}>
            <div>
                <div className='sub-title'>
                    <h5 className='text-secondary'>Product Details</h5>
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
                <InvoiceTotalsModal id={id} />
            </div>
        </Modal>
    );
};

export default InvoiceItemsModal;
