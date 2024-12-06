import { Link } from 'react-router-dom';
import './style.css';

export default function DevNavbar() {
    return (
        <nav id='DevNavbar'>
            {'DevMode - Navbar apenas para visualizar todos os paineis !'}
            <Link to="/mvis">MVIS (Mortes Violentas Intencionais)</Link>
            {' | '}
            <Link to="/violencia-contra-mulher">Violencia contra a mulher</Link>
            {' | '}
            <Link to="/letalidade-e-vitimizacao-policial">Letalidade e vitimizacao policial</Link>
            {' | '}
            <Link to="/Roubos-e-furtos">Roubos e furtos</Link>
        </nav>
    )
}
