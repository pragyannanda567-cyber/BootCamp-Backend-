import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Dashboard.css";

function StudentDashboard() {

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

    return (

        <div className="dashboard">

            <h1>📚 Student Dashboard</h1>

            <p>Welcome to the Library Management System</p>

            <div className="stats">

                <div className="card blue">
                    <h2>{books.length}</h2>
                    <p>Total Books</p>
                </div>

                <div className="card green">
                    <h2>
                        {books.reduce((total, book) => total + Number(book.quantity), 0)}
                    </h2>
                    <p>Available Copies</p>
                </div>

            </div>

            <div className="actions">

                <h2>Quick Actions</h2>

                <div className="action-buttons">

                    <button onClick={() => navigate("/view-books")}>
                        View Books
                    </button>

                    <button
                        onClick={() => {
                            localStorage.clear();
                            navigate("/");
                        }}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>

    );

}

export default StudentDashboard;