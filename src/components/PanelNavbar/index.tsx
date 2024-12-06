import { ReactNode } from 'react';
import './style.css';

interface PanelNavbarProps {
    title?: string;
    items: ReactNode[];
}

export default function PanelNavbar(props: PanelNavbarProps) {
    return (
        <div className='panel-navbar'>
            <h1>{props.title}</h1>
            {props.items}
        </div>
    )
}
