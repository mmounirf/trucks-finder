import ListItemDetails from 'src/components/molecules/ListItemDetails/ListItemDetails';
import { IOffer } from 'src/interfaces/IOffer';
import './ListItem.scss';

interface ListItemProps {
    offer: IOffer;
}

export default function ListItem (props: ListItemProps) {
    const { offer } = props;
    const { title, tags, shortCode, location, askPrice, highestBid } = offer;

    return (
        <div className="list-item">
            <img className="item__image" src={offer.vehicle_picture_front} alt="offer" />
            <ListItemDetails title={title} tags={tags} shortCode={shortCode} location={location}/>

            <div className="item__price">
                <div className="ask-price">
                    <span className="ask-price__label">Ask Price</span>
                    <span className="ask-price__value">{askPrice} €</span>
                </div>
                <div className="current-offer">
                    <span className="current-offer__label">Current Offer</span>
                    <span className="current-offer__value">{highestBid} €</span>
                </div>


            </div>
        </div>
    );
}