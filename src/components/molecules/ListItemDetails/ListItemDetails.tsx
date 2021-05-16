import { IOffer } from "src/interfaces/IOffer"
import Tag from 'src/components/atoms/Tag/Tag';
import './ListItemDetails.scss';

type ListITemDetailsProps = Pick<IOffer, 'title' | 'tags' | 'shortCode' | 'location'>

export default function ListItemDetails(props: ListITemDetailsProps) {
    const { title, tags, shortCode, location } = props;
    const _renderTags = () => tags.map((tag, i) => <Tag key={`${tag}-${i}`} tag={tag} />);
    return (
        <div className="details">
            <h1 className="details__title">{title}</h1>
            <div className="details__tags">
                {_renderTags()}
            </div>
            <div className="details__footer">
                <span className="code">{shortCode}</span>
                <p className="location">
                    <span>
                        <svg viewBox="0 0 20 20" width="20px" height="20px">
                        <path d="M6.99999 0C3.32406 0 0.333313 2.99074 0.333313 6.66668C0.333313 7.7702 0.609211 8.86434
                                1.1337 9.8348L6.63542 19.7852C6.70867 19.9178 6.84823 20 6.99999 20C7.15175 20 7.29132 19.9178
                                7.36456 19.7852L12.8683 9.83152C13.3908 8.86434 13.6667 7.77016 13.6667 6.66664C13.6667 2.99074
                                10.6759 0 6.99999 0ZM6.99999 10C5.16202 10 3.66667 8.50465 3.66667 6.66668C3.66667 4.82871 5.16202
                                3.33336 6.99999 3.33336C8.83796 3.33336 10.3333 4.82871 10.3333 6.66668C10.3333 8.50465 8.83796
                                10 6.99999 10Z" fill="#33667E"/>
                        </svg>
                    </span>
                    <span>{location}</span>
                </p>
            </div>
        </div>
    )
}