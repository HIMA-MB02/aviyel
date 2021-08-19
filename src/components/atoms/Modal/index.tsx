import React from 'react';
import './styles.css';
import { IModal } from './types';

// use same id as data-target for the button used to call this modal
const Modal: React.FunctionComponent<IModal> = ({ id, title, children }) => {
    return (
        <div
            className='modal fade'
            id={`${id}`}
            tabIndex={-1}
            role='dialog'
            aria-labelledby={`${id}Label`}
            aria-hidden='true'
        >
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id={`${id}Label`}>
                            {title}
                        </h5>
                        <button
                            type='button'
                            className='close'
                            data-dismiss='modal'
                            aria-label='Close'
                        >
                            <span aria-hidden='true'>&times;</span>
                        </button>
                    </div>
                    <div className='modal-body'>{children}</div>
                    {/* <div className='modal-footer'>
                        <button
                            type='button'
                            className='btn btn-secondary'
                            data-dismiss='modal'
                        >
                            Close
                        </button>
                        <button type='button' className='btn btn-primary'>
                            Save changes
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Modal;
