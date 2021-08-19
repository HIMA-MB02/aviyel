import React from 'react';

export interface IFormInput {
    value: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    errorText: string;
    setErrorText(erorrText: string): void;
    setValue(value: string | null): void;
    finalValidationCheck(): boolean;
}
