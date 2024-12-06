import './style.css';

interface LayoutProps {
    navbar: React.ReactNode;
    content: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="layout">
            {props.navbar}
            <div className='content'>
                {props.content}
            </div>
        </div>
    )
}
