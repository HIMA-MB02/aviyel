export interface IAction {
    type: string;
    payload: any;
};

export interface IInvoiceReducer {
    invoiceList: IInvoiceList[];
}

export interface IInvoiceList {
    id: number;
    timestamp: string;
    itemsCount: number;
    createdBy: string;
    amount: number;
}