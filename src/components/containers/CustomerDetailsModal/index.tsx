import React from 'react';
import { Input } from '../../atoms';
import Modal from '../../atoms/Modal';
import { ICustomerDetailsModal } from './types';

const CustomerDetailsModal: React.FunctionComponent<ICustomerDetailsModal> = ({
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
                <h5>Customer Details</h5>
                <hr />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Input
                                title={'First Name'}
                                placeholder='Customer Name'
                                name='name'
                            />
                            <Input
                                title={'Address'}
                                placeholder='Complete Address'
                                name='address'
                            />
                        </div>
                        <div className='col-md-6'>
                            <Input title={'Phone Number'} name='phone' />
                            <Input
                                title={'Email'}
                                placeholder='Customer Email'
                                name='email'
                            />
                            <Input
                                title={'Pincode'}
                                placeholder='Customer Pincode'
                                name='pincode'
                            />
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-right'>
                            <button
                                className='btn btn-primary'
                                data-toggle='modal'
                                data-target='#addInvoiceModal'
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

export default CustomerDetailsModal;
