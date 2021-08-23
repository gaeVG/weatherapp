import { Link } from "react-router-dom"

const Header = () => 
    <header className="container-fluid mb-5">
        <nav className="row">
            <ul className="text-center">
                <Link to="/">
                    <li className="list-inline-item">Accueil</li>
                </Link>

				<Link to ="/favorites">
                	<li className="list-inline-item">Favoris</li>
				</Link>
            </ul>
        </nav>
    </header>

export default Header