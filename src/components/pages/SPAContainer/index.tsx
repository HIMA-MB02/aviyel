import React from 'react';
import './styles.css';
import { Display, InvoiceList } from '../../containers';

const SPAContainer: React.FunctionComponent = () => {
    return (
        <div className='container-fluid full-h'>
            <div className='row full-h'>
                <div className='col-md-3 p-0 full-h infinite-scroll'>
                    <InvoiceList />
                </div>
                <div className='col-md-9 p-0'>
                    <Display />
                </div>
            </div>
        </div>
    );
};

export default SPAContainer;
