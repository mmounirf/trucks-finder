import './Tag.scss';

interface TagProps {
    tag: string;
}
export default function Tag(props: TagProps) {
    return (
        <span className="tag">{props.tag}</span>
    )
}