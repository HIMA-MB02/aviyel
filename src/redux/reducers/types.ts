export interface IAction {
    type: string;
    payload: any;
};

export interface ICryptoDataInitialState {
    historicalDatas: any[];
    nextCryptoListPage: number;
    currentlySelectedCoin: null | any;
    currentlySelectedSearchCryptoListValue: string;
    cryptoList: any[]
}