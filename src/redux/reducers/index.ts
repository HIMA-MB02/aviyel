import { combineReducers } from 'redux';
import invoiceReducer from './InvoiceReducer';

const rootReducer = combineReducers({
    invoiceReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
