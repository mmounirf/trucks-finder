import './TextInput.scss';

interface Props {
    id: string;
    onChange: (id: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export default function TextInput({ id, onChange, className = "" }: Props) {

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange(id, event);

    return (
        <input id={id} className={`text-input ${className}`} type="text" name={id} aria-label={id} onChange={onInputChange} />
    );
}