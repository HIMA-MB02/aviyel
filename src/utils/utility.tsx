import React from 'react';
import { IDocument, IFormData, IInvoiceList } from '../redux/reducers/types';
const formatAMPM = (date: Date) => {
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours || 12;
    const minutes =
        date.getMinutes() < 10
            ? `0${date.getMinutes()}`
            : `${date.getMinutes()}`;
    return hours + ':' + minutes + ' ' + ampm;
};

const getDate = (date: Date) => {
    const today = new Date();
    if (today.toDateString() === date.toDateString()) {
        // Same day - maybe different times
        return 'Today';
    } else {
        return `${String(date.getDate()).padStart(2, '0')}/${String(
            date.getMonth() + 1
        ).padStart(2, '0')}/${String(today.getFullYear()).slice(2)}`;
    }
};

export const getDateTime = (localeString: string) => {
    const date = new Date(localeString);
    return `${formatAMPM(date)} - ${getDate(date)}`;
};

export const formatRupee = (price: number) => {
    const x = price.toString();
    let lastThree = x.substring(x.length - 3);
    const otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== '') lastThree = ',' + lastThree;
    const result =
        otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;

    return (
        <>
            &#8377;
            {result}
        </>
    );
};

export const regexValidations = {
    email: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z]+$/,
    phone: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-]).{6,32}$/
};

export const formValidator = (name: string, value: string): string => {
    let errorValue = '';
    switch (name) {
    case 'text': {
        if (!value.trim().length) {
            errorValue = 'Please enter a valid name';
        }
        break;
    }
    case 'address': {
        if (!value.trim().length) {
            errorValue = 'Please enter a valid address';
        }
        break;
    }
    case 'email': {
        const isEmailRegexValid = regexValidations.email.test(
            value.toLowerCase()
        );
        if (!isEmailRegexValid) {
            errorValue = 'Please enter a valid email';
        }
        break;
    }
    // just in case
    case 'number': {
        if (isNaN(Number(value))) {
            errorValue = 'Trying to break me, huh?';
        }
        break;
    }
    case 'password': {
        const isPasswordRegexValid = regexValidations.password.test(value);
        if (!value.length) {
            errorValue = 'Please enter a valid password';
        } else if (value.length < 6 || value.length > 32) {
            errorValue =
                'Password should be at least from 6 to 32 characters';
        } else if (!isPasswordRegexValid) {
            errorValue =
                'Password should have to include alpha-numberic and special characters';
        }
        break;
    }
    default:
        break;
    }

    return errorValue;
};

export const createObjects = (formData: IFormData, id: number): [IInvoiceList, IDocument] => {
    const timestamp = new Date().toUTCString();
    const invList: IInvoiceList = {
        amount: formData.totals.grandTotal,
        customerName: formData.name ? formData.name : 'Unknown',
        itemsCount: formData.invoiceItemsList.length,
        timestamp,
        id
    };
    const invDocument: IDocument = {
        meta: {
            customerEmail: formData.email ? formData.email : 'Unknown',
            customerName: formData.name ? formData.name : 'Unknown',
            timestamp,
            id
        },
        invoiceItems: formData.invoiceItemsList,
        invoiceTotals: formData.totals
    };
    return [invList, invDocument];
};
