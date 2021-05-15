import { ISelectOption } from "src/interfaces/SelectOptionInterface";

export const SortingOptions: Array<ISelectOption> = [
    {id: 'lowestBid', label: 'Lowest Bid'},
    {id: 'highestBid', label: 'Highest Bid'},
    {id: 'newest', label: 'Newest Publishings'},
    {id: 'oldest', label: 'Oldest Publishings'},
]