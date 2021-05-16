import { ChangeEvent } from 'react';
import Button from 'src/components/atoms/Button/Button';
import SelectInput from 'src/components/atoms/SelectInput/SelectInput';
import { SortingOptions } from 'src/constants/SortingOptions';
import TextInput from '../../atoms/TextInput/TextInput';
import './ListingHeader.scss';

export default function ListingHeader () {

    const _handleSearchChange = (event: ChangeEvent<{ value: string }>) => {
        console.log(event?.currentTarget?.value);
    }

    const _handleSearchClick = () => {
        console.log('Search button clicked')
    }
    
    const _handleSorting = (optionId: string) => {
        console.log(optionId);
    }

    return (
        <header className="listing-header">
            <div className="listing-header__search">
                <TextInput className="search__input" id="Search" onChange={_handleSearchChange}/>
                <Button className="search__button" id="search-button" label="Search" onClick={_handleSearchClick} />
            </div>
            <div className="listing-header__sorting">
                <span className="label">Sort</span>
                <SelectInput options={SortingOptions} onChange={_handleSorting}/>
            </div>
        </header>
    );
}
