// import getAPI from '../../api/getAPI'
import { initialInvoiceList } from '../../../../utils/mock';
import { AppDispatch } from '../../../store';

import { ACTION_TYPES } from './types';

// let api = 'https://api.nomics.com/v1';
export const fetchInvoiceList = () => {
    return (dispatch: AppDispatch) => {
        setTimeout(() => {
            dispatch({
                type: ACTION_TYPES.FETCH_INVOICE_LIST,
                payload: {
                    invoiceList: initialInvoiceList
                }
            });
        }, 1000);
    };
};
