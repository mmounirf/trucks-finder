import { ISelectOption } from "src/interfaces/SelectOptionInterface";

export enum SortBy {
    LOWEST_BID = 'LOWEST_BID',
    HIGHEST_BID = 'HIGHEST_BID',
    NEWEST = 'NEWEST',
    OLDEST = 'OLDEST'
}

export const SortingOptions: Array<ISelectOption> = [
    {id: SortBy.LOWEST_BID, label: 'Lowest Bid'},
    {id: SortBy.HIGHEST_BID, label: 'Highest Bid'},
    {id: SortBy.NEWEST, label: 'Newest Publishings'},
    {id: SortBy.OLDEST, label: 'Oldest Publishings'},
];

