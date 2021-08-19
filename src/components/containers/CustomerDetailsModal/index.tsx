import React from 'react';
import { Input } from '../../atoms';
import Modal from '../../atoms/Modal';
import { ICustomerDetailsModal } from './types';

const CustomerDetailsModal: React.FunctionComponent<ICustomerDetailsModal> = ({
    id,
    title
}) => {
    return (
        <Modal id={id} title={title}>
            <div>
                <h5>Customer Details</h5>
                <hr />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Input title={'First Name'} />
                            <Input title={'First Name'} />
                        </div>
                        <div className='col-md-6'>
                            <Input title={'First Name'} />
                            <Input title={'First Name'} />
                            <Input title={'First Name'} />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default CustomerDetailsModal;
