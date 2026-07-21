import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await API.get("/books", {
                headers: {
                    Authorization: token
                }
            });

            setBooks(response.data.books || []);

        } catch (error) {

            console.log(error);

        }

    };

    const totalQuantity = books.reduce(
        (total, book) => total + Number(book.quantity),
        0
    );

    const logout = () => {

        localStorage.clear();

        navigate("/");

    };

    return (

        <div className="dashboard">

            <h1>📚 Admin Dashboard</h1>

            <p>Welcome to the Library Management System</p>

            {/* Statistics */}

            <div className="stats">

                <div className="card blue">

                    <h2>{books.length}</h2>

                    <p>Total Books</p>

                </div>

                <div className="card green">

                    <h2>{totalQuantity}</h2>

                    <p>Available Copies</p>

                </div>

                <div className="card orange">

                    <h2>3</h2>

                    <p>System Modules</p>

                </div>

            </div>

            {/* Quick Actions */}

            <div className="actions">

                <h2>Quick Actions</h2>

                <div className="action-buttons">

                    <button
                        onClick={() => navigate("/add-book")}
                    >
                        ➕ Add Book
                    </button>

                    <button
                        onClick={() => navigate("/view-books")}
                    >
                        📖 View Books
                    </button>

                    <button
                        onClick={logout}
                    >
                        🚪 Logout
                    </button>

                </div>

            </div>

            {/* Recent Activity */}

            <div className="activity">

                <h2>Recent Activity</h2>

                <ul>

                    <li>
                        <span>📚 Books Available in Library</span>
                        <span>{books.length}</span>
                    </li>

                    <li>
                        <span>📦 Total Copies Available</span>
                        <span>{totalQuantity}</span>
                    </li>

                    <li>
                        <span>🟢 MongoDB Database</span>
                        <span>Connected</span>
                    </li>

                    <li>
                        <span>🔐 Logged in as</span>
                        <span>Admin</span>
                    </li>

                </ul>

            </div>

            {/* Footer */}

            <div className="dashboard-footer">

                <p>
                    📚 Library Management System © 2026
                </p>

            </div>

        </div>

    );

}

export default Dashboard;