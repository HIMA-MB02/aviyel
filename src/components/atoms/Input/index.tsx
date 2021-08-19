import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFormData } from '../../../redux';
import { useFormInput } from '../../../utils/CustomHooks';
import './styles.css';
import { IInput } from './types';

// custom input component to avoid
const Input: React.FunctionComponent<IInput> = ({
    title,
    placeholder,
    name
}) => {
    const dispatch = useDispatch();
    const input = useFormInput('');
    useEffect(() => {
        dispatch(setFormData(name, input.value));
    }, [input.value]);
    return (
        <div className='input-container'>
            <div className='input-title'>{title}</div>
            <input
                className='form-input form-control'
                type='text'
                {...input}
                placeholder={placeholder}
                name={name}
            />
        </div>
    );
};

export default Input;
