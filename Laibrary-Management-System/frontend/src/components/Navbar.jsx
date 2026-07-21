import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    return (

        <nav className="navbar">

            <h2 className="logo">
                📚 LibraryMS
            </h2>

            <div className="nav-links">

                <Link to="/dashboard">
                    Dashboard
                </Link>

                <Link to="/add-book">
                    Add Book
                </Link>

                <Link to="/view-books">
                    View Books
                </Link>

            </div>

        </nav>

    );

}

export default Navbar;