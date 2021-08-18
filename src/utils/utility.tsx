import React from 'react';
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
