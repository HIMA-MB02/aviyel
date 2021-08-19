import { ACTION_TYPES } from '../../actions/types';
import { IAction, IInvoiceReducer } from '../types';

const initialState: IInvoiceReducer = {
    invoiceList: [],
    invoiceListLoading: true,
    invoiceListError: null,
    invoiceDocuments: [],
    invoiceDocumentLoading: true,
    searchValue: '',
    currentlySelectedDocumentId: null,
    currentlySelectedDocumentError: null
};

const invoiceReducer = (
    _state: IInvoiceReducer = initialState,
    { type, payload }: IAction
): IInvoiceReducer => {
    switch (type) {
    case ACTION_TYPES.FETCH_INVOICE_LIST:
        return {
            ..._state,
            invoiceList: payload.invoiceList,
            invoiceListLoading: payload.invoiceListLoading,
            invoiceListError: payload.invoiceListError
        };
    case ACTION_TYPES.UPDATE_CURRENTLY_SELCTED_DOCUMENT:
        return {
            ..._state,
            currentlySelectedDocumentId:
                payload.currentlySelectedDocumentId,
            currentlySelectedDocumentError:
                payload.currentlySelectedDocumentError
        };
    case ACTION_TYPES.FETCH_DOCUMENT:
        return {
            ..._state,
            currentlySelectedDocumentId:
                payload.currentlySelectedDocument.meta.id,
            invoiceDocuments: [
                ..._state.invoiceDocuments,
                payload.currentlySelectedDocument
            ],
            currentlySelectedDocumentError:
                payload.currentlySelectedDocumentError
        };
    case ACTION_TYPES.SET_DOCMENT_FETCH_ERROR:
        return {
            ..._state,
            currentlySelectedDocumentId:
                payload.currentlySelectedDocumentId,
            currentlySelectedDocumentError:
                payload.currentlySelectedDocumentError
        };
    case ACTION_TYPES.SET_SEARCH_VALUE:
        return {
            ..._state,
            searchValue: payload.searchValue
        };
    case ACTION_TYPES.SET_INVOICE_LIST_LOADING:
        return {
            ..._state,
            invoiceListLoading: payload.invoiceListLoading
        };
    default:
        return _state;
    }
};
export default invoiceReducer;
