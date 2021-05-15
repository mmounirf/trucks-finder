import useFetch from 'src/hooks/useFetch';
import Alert from 'src/components/atoms/Alert/Alert';
import ListingHeader from 'src/components/molecules/ListingHeader/ListingHeader';
import { GET_ACTIVE_OFFERS } from 'src/constants/Api';
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

    return (
        <main className="listing-page">
            <ListingHeader />
            {error && !loading && <Alert type="error">Something went wrong!</Alert>}
        </main>
    );
}