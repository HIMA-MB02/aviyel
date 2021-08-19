export interface IAction {
    type: string;
    payload: any;
}

export interface IInvoiceReducer {
    invoiceList: IInvoiceList[];
    invoiceListLoading: boolean;
    invoiceListError: string | null;
    invoiceDocuments: IDocument[];
    invoiceDocumentLoading: boolean;
    currentlySelectedDocument: IDocument | null;
    currentlySelectedDocumentError: string | null;
    currentlySelectedDocumentLoading: boolean;
    searchValue: string;
    formData: IFormData;
}

export interface IFormData {
    invoiceItemsList: IInvoiceItem[];
    totals: IInvoiceTotals;
    name?: string;
    address?: string;
    email?: string;
    pincode?: string;
}

export interface IInvoiceTotals {
    subTotal: number;
    tax: number;
    discount: number;
    grandTotal: number;
}

export interface IDocument {
    meta: {
        customerName: string;
        customerEmail: string;
        id: number;
        timestamp: string;
    };
    invoiceItems: IInvoiceItem[];
    invoiceTotals: IInvoiceTotals;
}

export interface IInvoiceItem {
    index?: number;
    id: number;
    itemName: string;
    itemQuantity: number;
    itemUnitPrice: number;
    itemPrice: number;
}

export interface IInvoiceList {
    id: number;
    timestamp: string;
    itemsCount: number;
    customerName: string;
    amount: number;
}
