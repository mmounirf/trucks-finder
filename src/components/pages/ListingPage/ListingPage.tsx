import { useState, useEffect } from 'react';
import useFetch from 'src/hooks/useFetch';
import Alert from 'src/components/atoms/Alert/Alert';
import ListingHeader from 'src/components/molecules/ListingHeader/ListingHeader';
import ListItem from 'src/components/organisms/ListItem/ListItem';
import { IOffer } from 'src/interfaces/IOffer';
import { GET_ACTIVE_OFFERS } from 'src/constants/Api';
import { SortBy } from 'src/constants/SortingOptions';
import './ListingPage.scss';


const options: RequestInit = {
    method: 'GET',
    headers: {
        'accept-language': 'en-US',
        'content-type': 'application/json'
    }
}

export default function ListingPage () {
    const {response, error, loading} = useFetch({url: GET_ACTIVE_OFFERS, options});
    const [offers, setOffers] = useState<Array<IOffer> | undefined>();
    const [filteredOffers, setFilteredOffers] = useState<Array<IOffer> | []>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const getFilteredOffers = () => {
        const searchValue = searchTerm.toLocaleLowerCase();
        const searchWords = searchValue.split(" ").filter((word: string) => word.length >= 3);
        
        if(searchTerm.length < 3) {
            return offers ?? [];
        }

        return (offers ?? []).filter((offer) => {
            const tags = offer.tags.join().toLocaleLowerCase();
            const title = offer.title.toLocaleLowerCase();

            return searchWords.find((word: string) => tags.includes(word) || title.includes(word));
        });
    };

    useEffect(() => {
        setFilteredOffers(getFilteredOffers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm])

    const handleSearch = (searchValue: string) => setSearchTerm(searchValue);
    const handleSorting = (sortBy: SortBy) => console.log(sortBy);

    useEffect(() => {
        setOffers(response);
        if(response) {
            setFilteredOffers(response);
        }
    }, [response]);

    const _renderOffersList = () => {
        const offersList = filteredOffers.map((offer: IOffer) => <ListItem offer={offer} key={offer.uid} />);
        const noResults = <Alert type="error">No results matching "<strong>{searchTerm}</strong>"</Alert>;
        return loading ? 'loading....' : Boolean(filteredOffers.length) ? <div className="list">{offersList}</div> : noResults;
    }

    return (
        <main className="listing-page">
            <ListingHeader onSearch={handleSearch} onSearchClick={handleSearch} onSorting={handleSorting} />
            {error && !loading && <Alert type="error">Something went wrong!</Alert>}
            {_renderOffersList()}
        </main>
    );
}
