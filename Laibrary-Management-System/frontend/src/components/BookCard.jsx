import { Link } from "react-router-dom";
import API from "../services/api";
import "./BookCard.css";

function BookCard({ book, fetchBooks }) {

    const user = JSON.parse(localStorage.getItem("user"));

    const handleDelete = async () => {

        const confirmDelete = window.confirm(
            `Delete "${book.title}" ?`
        );

        if (!confirmDelete) return;

        try {

            const token = localStorage.getItem("token");

            const response = await API.delete(
                `/books/${book._id}`,
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            alert(response.data.message);

            fetchBooks();

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Delete Failed"
            );

        }

    };

    return (

        <div className="book-card">

            <h2 className="book-title">
                📖 {book.title}
            </h2>

            <p className="book-info">
                <strong>Author:</strong> {book.author}
            </p>

            <p className="book-info">
                <strong>Category:</strong> {book.category}
            </p>

            <p className="book-info">
                <strong>Price:</strong> ₹{book.price}
            </p>

            <p className="book-info">
                <strong>Quantity:</strong> {book.quantity}
            </p>

            <div className="book-buttons">

                {user?.role === "Admin" && (
                    <>
                        <Link to={`/edit-book/${book._id}`}>
                            <button className="edit-btn">
                                Edit
                            </button>
                        </Link>

                        <button
                            className="delete-btn"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </>
                )}

            </div>

        </div>

    );

}

export default BookCard;