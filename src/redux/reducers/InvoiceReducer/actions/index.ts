// import getAPI from '../../api/getAPI'
import { ReduxState } from '../../..';
import {
    initialDocumentList,
    initialInvoiceList
} from '../../../../utils/mock';
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

export const fetchDocument = (id: number) => {
    return (dispatch: AppDispatch, getState: () => ReduxState) => {
        // checks if the document to be viewed exists in the current redux state
        // i.e. state.invoiceReducer.invoiceDocumentList
        const filterCurrentDocument =
            getState().invoiceReducer.invoiceDocumentList.filter(
                (document) => document.meta.id === id
            );
        console.log('filtered state', filterCurrentDocument);
        if (filterCurrentDocument.length) {
            dispatch({
                type: ACTION_TYPES.UPDATE_CURRENTLY_SELCTED_DOCUMENT,
                payload: {
                    currentlySelectedDocumentId:
                        filterCurrentDocument[0].meta.id
                }
            });
        } else {
            // If the document is not present in the current redux state, then make an API call to get the document details
            setTimeout(() => {
                console.log(
                    initialDocumentList.filter(
                        (document) => document.meta.id === id
                    )
                );
                dispatch({
                    type: ACTION_TYPES.FETCH_DOCUMENT,
                    payload: {
                        currentlySelectedDocument: initialDocumentList.filter(
                            (document) => document.meta.id === id
                        )[0]
                    }
                });
            }, 1000);
        }
    };
};
