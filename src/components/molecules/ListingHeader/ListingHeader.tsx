import { ChangeEvent, useState } from 'react';
import Button from 'src/components/atoms/Button/Button';
import SelectInput from 'src/components/atoms/SelectInput/SelectInput';
import { SortBy, SortingOptions } from 'src/constants/SortingOptions';
import TextInput from '../../atoms/TextInput/TextInput';
import './ListingHeader.scss';

interface ListingHeaderProps {
    onSearch: (searchTerm: string) => void;
    onSearchClick: (searchTerm: string) => void;
    onSorting: (sortBy: SortBy) => void;
}

export default function ListingHeader ({ onSearch, onSearchClick, onSorting }: ListingHeaderProps) {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [liveSearch, setLiveSearch] = useState<boolean>(false);

    const _handleSearchClick = () => onSearchClick(searchTerm);
    const _handleSorting = (optionId: SortBy) => onSorting(optionId);
    const _handleSearchToogle = (event: ChangeEvent<{ checked: boolean}>) => setLiveSearch(event?.currentTarget?.checked);

    const _handleSearchChange = (event: ChangeEvent<{ value: string }>) => {
        setSearchTerm(event?.currentTarget?.value);
        if(liveSearch) onSearch(event?.currentTarget?.value);
    }

    return (
        <header className="listing-header">
            <div className="listing-header__search">
                <TextInput placeholder="At least 3 characters needed to search" className="search__input" id="Search" onChange={_handleSearchChange}/>
                <Button className="search__button" id="search-button" label="Search" onClick={_handleSearchClick} />
                <div className="search__toggle">
                    <input type="checkbox" id="liveSearch" name="liveSearch" checked={liveSearch} onChange={_handleSearchToogle} />
                    <label htmlFor="liveSearch">Live Search?</label>
                </div>
            </div>
            <div className="listing-header__sorting">
                <span className="label">Sort</span>
                <SelectInput options={SortingOptions} onChange={_handleSorting}/>
            </div>
        </header>
    );
}
