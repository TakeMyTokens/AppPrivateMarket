export interface IAdvertisement {
    dateUpdate: Date;
    walletID: string;
    state: number;
    currentNumberQueue: number;
    id: string;
    dateAdvertisementStart: Date;
    dateAdvertisementEnd: Date;
    offeredItems: OfferedItem[];
    requestedItems: OfferedItem[];
    acceptOtherItems: boolean;
    negotiable: boolean;
    onlyEntireAmount: boolean;
    exchangeArea: string;
}

interface OfferedItem {
    amount: number;
    type: number;
    description: string;
}
