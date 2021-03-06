// This file provides action creators for InvoiceReducer
import { ReduxState } from '..';
import { fetchDocAPI, fetchInvoiceListAPI } from '../../api/getAPI';
import { createObjects } from '../../utils/utility';
import { initialFormData } from '../reducers/InvoiceReducer';
import { IAction, IFormData, IInvoiceItem, IInvoiceTotals } from '../reducers/types';
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
                    currentlySelectedDocument: filterCurrentDocument[0],
                    currentlySelectedDocumentError: null,
                    currentlySelectedDocumentLoading: false
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
                            currentlySelectedDocumentError: null,
                            currentlySelectedDocumentLoading: false
                        }
                    });
                }
            } catch (e) {
                dispatch({
                    type: ACTION_TYPES.SET_DOCMENT_FETCH_ERROR,
                    payload: {
                        currentlySelectedDocumentError: e.message,
                        currentlySelectedDocument: null,
                        currentlySelectedDocumentLoading: false
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

export const setCurrentDocumentLoading = (isLoading: boolean) => {
    return {
        type: ACTION_TYPES.SET_CURRENT_DOCUMENT_LOADING,
        payload: {
            currentlySelectedDocumentLoading: isLoading
        }
    };
};

export const setFormData = (name: string, value: string | IInvoiceItem[] | IInvoiceTotals) => {
    return {
        type: ACTION_TYPES.SET_FORM_DATA,
        payload: {
            name,
            value
        }
    };
};

export const removeFormData = () => {
    return {
        type: ACTION_TYPES.REMOVE_FORM_DATA,
        payload: {
            formData: {}
        }
    };
};

export const sendFormData = (formData: IFormData) => {
    return (dispatch: AppDispatch, getState: () => ReduxState) => {
        // here we would make api call to update the BE.
        // just updating local state for now
        const id = getState().invoiceReducer.invoiceList.length + 1;
        const [invList, invDoc] = createObjects(formData, id);
        dispatch({
            type: ACTION_TYPES.ADD_INV_TO_STATE,
            payload: {
                invList,
                invDoc,
                formData: initialFormData
            }
        });
    };
};
