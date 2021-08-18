import React, { useState } from 'react';
import { formValidator } from '../../utility';
import { FormInputProps } from './types';

const useFormInput = (initalValue: string):FormInputProps => {
    const [value, setValue] = useState<any>(initalValue);
    const [typingTimeout, setTypingTimeout] = useState<ReturnType<
        typeof setTimeout
    > | null>(null);
    const [errorText, setErrorText] = useState<string>('');

    const finalValidationCheck = (): boolean => {
        let validity = true;
        if (!value.length) {
            setErrorText('This field cannot be empty');
            validity = false;
        }
        if (errorText) {
            validity = false;
        }
        return validity;
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const formValue = e.currentTarget.value;
        const formName = e.currentTarget.name;
        if (typingTimeout) {
            clearTimeout(typingTimeout);
            setErrorText('');
        }
        setTypingTimeout(
            setTimeout(() => {
                setErrorText(formValidator(formName, formValue));
            }, 200)
        );

        setValue(formValue);
    };
    return {
        value,
        errorText,
        setErrorText,
        setValue,
        onChange,
        finalValidationCheck
    };
};

export default useFormInput;
