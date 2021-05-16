import './TextInput.scss';

interface Props {
    id: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export default function TextInput({ id, onChange, placeholder, className = "" }: Props) {

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange(event);

    return (
        <input id={id} placeholder={placeholder} className={`text-input ${className}`} type="text" name={id} aria-label={id} onChange={onInputChange} />
    );
}