import useFetch from 'src/hooks/useFetch';
import Alert from 'src/components/atoms/Alert/Alert';
import ListingHeader from 'src/components/molecules/ListingHeader/ListingHeader';
import ListItem from 'src/components/organisms/ListItem/ListItem';
import { GET_ACTIVE_OFFERS } from 'src/constants/Api';
import './ListingPage.scss';
import { memo } from 'react';
import { IOffer } from 'src/interfaces/IOffer';


const options: RequestInit = {
    method: 'GET',
    headers: {
        'accept-language': 'en-US',
        'content-type': 'application/json'
    }
}

function ListingPage () {
    const {response, error, loading} = useFetch({url: GET_ACTIVE_OFFERS, options});
    const _renderOffersList = () => {
        if(!response || loading) {
            return null;
        }
        return (
            <div className="list">
                {response.map((offer: IOffer) => offer && <ListItem offer={offer} key={offer.uid} />)}
            </div>
        );
    }


    return (
        <main className="listing-page">
            <ListingHeader />
            {error && !loading && <Alert type="error">Something went wrong!</Alert>}
            {_renderOffersList()}
        </main>
    );
}

export default memo(ListingPage)