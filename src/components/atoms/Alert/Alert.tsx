import { ReactNode } from 'react';
import './Alert.scss';

interface AlertProps {
    children: ReactNode;
    type: 'error' | 'warning' | 'info' | 'success';
}

export default function Alert({children, type}: AlertProps) {

    return (
        <div className={`alert alert__${type}`}>
            {children}
        </div>
    )
}