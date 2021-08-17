import { ACTION_TYPES } from "./actions/types";
import { IAction, IInvoiceReducer } from '../types';

const initialState: IInvoiceReducer = {
    invoiceList: []
};

const invoiceReducer = (_state: IInvoiceReducer = initialState, { type, payload }: IAction): IInvoiceReducer => {
    switch (type) {
        case ACTION_TYPES.FETCH_INVOICE_LIST:
            return {
                ..._state,
                invoiceList: payload.invoiceList
            };
        default:
            return _state;
    }
};
export default invoiceReducer;