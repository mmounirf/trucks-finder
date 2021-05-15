import { memo } from 'react';
import Button from 'src/components/atoms/Button/Button';
import SelectInput from 'src/components/atoms/SelectInput/SelectInput';
import { SortingOptions } from 'src/constants/SortingOptions';
import TextInput from '../../atoms/TextInput/TextInput';
import './ListingHeader.scss';

function ListingHeader () {
    return (
        <header className="listing-header">
            <div className="listing-header__search">
                <TextInput className="search__input" id="Search" onChange={(id, e) => console.log(id, e)}/>
                <Button className="search__button" id="search-button" label="Search" onClick={(id, e) => console.log(id, e)} />
            </div>
            <div className="listing-header__sorting">
                <span className="label">Sort</span>
                <SelectInput options={SortingOptions} onChange={(selectedOption) => console.log(selectedOption)}/>
            </div>
        </header>
    );
}

export default memo(ListingHeader)