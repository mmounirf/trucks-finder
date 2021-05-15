export interface IOffer {
    uid: string;
    title: string;
    askPrice: number;
    highestBid: number;
    serviceFee: number;
    checkDate: string;
    offerPublicationDate: string;
    isSold: boolean;
    location: string;
    tags: Array<string>;
    shortCode: string;
    vehicle_picture_front: string;
    owner?: string;
    minPrice?: number;
    priceStepSize?: number;
    fairMarketValue: number;
}