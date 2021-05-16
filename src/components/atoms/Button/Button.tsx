import './Button.scss';

interface Props {
    id: string;
    label: string;
    onClick: () => void;
    className?: string;
}

export default function Button({ id, label, onClick, className = "" }: Props) {

    return (
        <button className={`button ${className}`} id={id} onClick={onClick}>{label}</button>
    );
}