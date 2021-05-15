import './Button.scss';

interface Props {
    id: string;
    label: string;
    onClick: (id: string, event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

export default function Button({ id, label, onClick, className = "" }: Props) {

    const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => onClick(id, event);

    return (
        <button className={`button ${className}`} id={id} onClick={onButtonClick}>{label}</button>
    );
}