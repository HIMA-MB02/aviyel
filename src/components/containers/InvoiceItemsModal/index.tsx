import React from 'react';
import './styles.css';
// import { Input } from '../../atoms';
import Modal from '../../atoms/Modal';
import { IInvoiceItemsModal } from './types';
import InvoiceItemsModalTable from '../InvoiceItemsModalTable';
import InvoiceTotalsModal from '../InvoiceTotalsModal';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../redux';

const InvoiceItemsModal: React.FunctionComponent<IInvoiceItemsModal> = ({
    id,
    title
}) => {
    const [name, email] = useSelector((state: ReduxState) => [state.invoiceReducer.formData.name, state.invoiceReducer.formData.email]);
    return (
        <Modal id={id} title={title}>
            <div>
                <div className='sub-title'>
                    <h5 className='text-secondary'>Product Details</h5>
                    <div className='customer'>
                        <h6 className='text-muted'>CUSTOMER DETAILS</h6>
                        <h6 className='text-black customer-name-text'>
                            {name}
                        </h6>
                        <h6 className='text-muted'>{email}</h6>
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
