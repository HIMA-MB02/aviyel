// This file provides action creators for InvoiceReducer
import { ReduxState } from '..';
import { fetchDocAPI } from '../../api/getAPI';
import { initialInvoiceList } from '../../utils/mock';
import { AppDispatch } from '../store';

import { ACTION_TYPES } from './types';

// Fetch the list on the left sidebar
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

// Fetch the document that is currently being viewed
export const fetchDocument = (id: number) => {
    return async (dispatch: AppDispatch, getState: () => ReduxState) => {
        // checks if the document to be viewed exists in the current redux state
        // i.e. state.invoiceReducer.invoiceDocumentList
        const filterCurrentDocument =
            getState().invoiceReducer.invoiceDocumentList.filter(
                (document) => document.meta.id === id
            );
        if (filterCurrentDocument.length) {
            dispatch({
                type: ACTION_TYPES.UPDATE_CURRENTLY_SELCTED_DOCUMENT,
                payload: {
                    currentlySelectedDocumentId:
                        filterCurrentDocument[0].meta.id,
                    currentlySelectedDocumentError: null
                }
            });
        } else {
            try {
                const res: any = await fetchDocAPI(id);
                if (res.data && res.status === 200) {
                    dispatch({
                        type: ACTION_TYPES.FETCH_DOCUMENT,
                        payload: {
                            currentlySelectedDocument: res.data,
                            currentlySelectedDocumentError: null
                        }
                    });
                }
            } catch (e) {
                dispatch({
                    type: ACTION_TYPES.SET_DOCMENT_FETCH_ERROR,
                    payload: {
                        currentlySelectedDocumentError: e.message,
                        currentlySelectedDocumentId: null
                    }
                });
            }
        }
    };
};
