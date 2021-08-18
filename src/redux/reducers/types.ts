export interface IAction {
    type: string;
    payload: any;
}

export interface IInvoiceReducer {
    invoiceList: IInvoiceList[];
    invoiceDocumentList: IDocument[];
    currentlySelectedDocumentId: number | null;
    currentlySelectedDocumentError: string | null;
    searchValue: string;
}

export interface IDocument {
    meta: {
        customerName: string;
        customerEmail: string;
        id: number;
        timestamp: string;
    };
    invoiceItems: IInvoiceItem[];
    invoiceTotals: {
        subTotal: number;
        tax: number;
        discount: number;
        grandTotal: number;
    };
}

export interface IInvoiceItem {
    index?: number;
    id?: number;
    itemName: string;
    itemQuantity: number;
    itemUnitPrice: number;
    itemPrice: number;
}

export interface IInvoiceList {
    id: number;
    timestamp: string;
    itemsCount: number;
    createdBy: string;
    amount: number;
}
