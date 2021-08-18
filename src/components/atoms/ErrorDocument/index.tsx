import React from 'react';
import './styles.css';
import { IErrorDocument } from './types';

const ErrorDocument: React.FunctionComponent<IErrorDocument> = ({
    errorMessage
}) => {
    return (
        <div className='container full-h'>
            <div className='row justify-content-around align-items-center full-h'>
                <div>
                    <div className='text-secondary text-center message'>
                        Hey, looks like something broke!
                    </div>
                    <div className='error-message text-center message'>
                        <span className='text-secondary'>Message: </span>
                        {errorMessage}!
                    </div>
                    <div className='text-secondary text-center message'>
                        If the problem persists, please contact administrator.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorDocument;
