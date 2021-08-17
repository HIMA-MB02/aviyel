import { combineReducers } from 'redux';
import invoiceReducer from './InvoiceReducer';

export default combineReducers({
    invoiceReducer
});

export type RootState = ReturnType<typeof combineReducers>;
