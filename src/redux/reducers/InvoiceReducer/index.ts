import { ACTION_TYPES } from '../../actions/types';
import { IAction, IFormData, IInvoiceReducer } from '../types';

const initialFormData: IFormData = {
    invoiceItemsList: [],
    totals: {
        discount: 0,
        grandTotal: 0,
        subTotal: 0,
        tax: 0
    }
};

const initialState: IInvoiceReducer = {
    invoiceList: [],
    invoiceListLoading: true,
    invoiceListError: null,
    invoiceDocuments: [],
    invoiceDocumentLoading: true,
    searchValue: '',
    currentlySelectedDocument: null,
    currentlySelectedDocumentError: null,
    currentlySelectedDocumentLoading: false,
    formData: initialFormData
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
            currentlySelectedDocument: payload.currentlySelectedDocument,
            currentlySelectedDocumentError:
                payload.currentlySelectedDocumentError,
            currentlySelectedDocumentLoading:
                payload.currentlySelectedDocumentLoading
        };
    case ACTION_TYPES.FETCH_DOCUMENT:
        return {
            ..._state,
            currentlySelectedDocument: payload.currentlySelectedDocument,
            invoiceDocuments: [
                ..._state.invoiceDocuments,
                payload.currentlySelectedDocument
            ],
            currentlySelectedDocumentError:
                payload.currentlySelectedDocumentError,
            currentlySelectedDocumentLoading:
                payload.currentlySelectedDocumentLoading
        };
    case ACTION_TYPES.SET_DOCMENT_FETCH_ERROR:
        return {
            ..._state,
            currentlySelectedDocument: payload.currentlySelectedDocument,
            currentlySelectedDocumentError:
                payload.currentlySelectedDocumentError,
            currentlySelectedDocumentLoading:
                payload.currentlySelectedDocumentLoading
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
    case ACTION_TYPES.SET_CURRENT_DOCUMENT_LOADING:
        return {
            ..._state,
            currentlySelectedDocumentLoading:
                payload.currentlySelectedDocumentLoading
        };
    case ACTION_TYPES.SET_FORM_DATA:
        return {
            ..._state,
            formData: {
                ..._state.formData,
                [payload.name]: payload.value
            }
        };
    case ACTION_TYPES.REMOVE_FORM_DATA:
        return {
            ..._state,
            formData: payload.formData
        };
    case ACTION_TYPES.ADD_INV_TO_STATE:
        return {
            ..._state,
            invoiceList: [..._state.invoiceList, payload.invList],
            invoiceDocuments: [..._state.invoiceDocuments, payload.invDoc]
        };
    default:
        return _state;
    }
};
export default invoiceReducer;
