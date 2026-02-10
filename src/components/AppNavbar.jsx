import { Link } from "react-router-dom";
import '../styles/AppNavbar.css';
export default function Navbar() {
    return (
        <div id="navbar">
            <ul className="nav navbar-nav">
                <li><p>AceStack</p></li>
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/roadmap">Roadmap</Link></li>
                <li><Link to="/flashcards">Flashcards</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
        </div>
    );
}