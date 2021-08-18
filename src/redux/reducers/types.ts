export interface IAction {
    type: string;
    payload: any;
}

export interface IInvoiceReducer {
    invoiceList: IInvoiceList[];
    invoiceDocumentList: IDocument[];
    currentlySelectedDocumentId: number | null;
    currentlySelectedDocumentError: string | null;
}

export interface IDocument {
    meta: {
        customerName: string;
        customerEmail: string;
        id: number;
        timestamp: string;
    };
    invoiceItems: IInvoiceItems[];
}

export interface IInvoiceItems {
    id: number;
    itemName: string;
    itemQuantity: number;
    itemPrice: number;
    itemTotalPrice: number;
}

export interface IInvoiceList {
    id: number;
    timestamp: string;
    itemsCount: number;
    createdBy: string;
    amount: number;
}
