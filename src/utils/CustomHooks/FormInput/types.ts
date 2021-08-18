import React from 'react';

export interface FormInputProps {
    value: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    errorText: string;
    setErrorText(erorrText: string): void;
    setValue(value: string | null): void;
    finalValidationCheck(): boolean;
}
