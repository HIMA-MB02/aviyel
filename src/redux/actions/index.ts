// This file provides action creators for InvoiceReducer
import { ReduxState } from '..';
import { fetchDocAPI, fetchInvoiceListAPI } from '../../api/getAPI';
import { IAction } from '../reducers/types';
import { AppDispatch } from '../store';

import { ACTION_TYPES } from './types';

// Fetch the list on the left sidebar
export const fetchInvoiceList = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const res: any = await fetchInvoiceListAPI();
            if (res.status === 200) {
                dispatch({
                    type: ACTION_TYPES.FETCH_INVOICE_LIST,
                    payload: {
                        invoiceList: res.data,
                        invoiceListLoading: false,
                        invoiceListError: null
                    }
                });
            }
        } catch (e) {
            dispatch({
                type: ACTION_TYPES.FETCH_INVOICE_LIST,
                payload: {
                    invoiceList: [],
                    invoiceListLoading: false,
                    invoiceListError: e.message
                }
            });
        }
    };
};

// Fetch the document that is currently being viewed
export const fetchDocument = (id: number) => {
    return async (dispatch: AppDispatch, getState: () => ReduxState) => {
        // checks if the document to be viewed exists in the current redux state
        // i.e. state.invoiceReducer.invoiceDocumentList
        const filterCurrentDocument =
            getState().invoiceReducer.invoiceDocuments.filter(
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

export const setSearchValue = (searchValue: string): IAction => {
    return {
        type: ACTION_TYPES.SET_SEARCH_VALUE,
        payload: {
            searchValue
        }
    };
};

export const setInvoiceListLoading = (isLoading: boolean) => {
    return {
        type: ACTION_TYPES.SET_INVOICE_LIST_LOADING,
        payload: {
            invoiceListLoading: isLoading
        }
    };
};
