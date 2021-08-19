import React from 'react';
import './styles.css';
import { Display } from '../';
import { InvoiceList, FloatingAddButton } from '../../containers';

const SPAContainer: React.FunctionComponent = () => {
    return (
        <>
            <div className='container-fluid full-h'>
                <div className='row full-h'>
                    <div className='col-md-3 p-0 full-h infinite-scroll bg-light'>
                        <InvoiceList />
                    </div>
                    <div className='col-md-9 p-0 full-h infinite-scroll'>
                        <Display />
                    </div>
                </div>
            </div>
            <FloatingAddButton />
        </>
    );
};

export default SPAContainer;
