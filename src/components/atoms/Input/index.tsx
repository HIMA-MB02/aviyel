import React from 'react';
import { useFormInput } from '../../../utils/CustomHooks';
import './styles.css';
import { IInput } from './types';

const Input: React.FunctionComponent<IInput> = ({ title }) => {
    const input = useFormInput('');
    return (
        <div className='input-container'>
            <div className='input-title'>{title}</div>
            <input className='form-input' type='text' {...input} />
        </div>
    );
};

export default Input;
