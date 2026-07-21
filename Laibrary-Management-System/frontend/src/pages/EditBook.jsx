import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../services/api";
import "./EditBook.css";

function EditBook() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [book, setBook] = useState({
        title: "",
        author: "",
        category: "",
        price: "",
        quantity: "",
        publishedYear: ""
    });

    useEffect(() => {
        fetchBook();
    }, []);

    const fetchBook = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await API.get("/books", {
                headers: {
                    Authorization: token
                }
            });

            const selectedBook = response.data.books.find(
                (book) => book._id === id
            );

            if (selectedBook) {
                setBook(selectedBook);
            }

        } catch (error) {

            console.log(error);

            alert("Failed to load book");

        }

    };

    const handleChange = (e) => {

        setBook({
            ...book,
            [e.target.name]: e.target.value
        });

    };

    const handleUpdate = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            const response = await API.put(
                `/books/${id}`,
                book,
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            alert(response.data.message);

            navigate("/view-books");

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Unable to update book"
            );

        }

    };

    return (

        <>

            <Navbar />

            <div className="edit-book-container">

                <div className="edit-book-card">

                    <h1>✏️ Edit Book</h1>

                    <p>Update the details of the selected book.</p>

                    <form onSubmit={handleUpdate}>

                        <div className="edit-form-group">
                            <label>Book Title</label>

                            <input
                                type="text"
                                name="title"
                                value={book.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="edit-form-group">
                            <label>Author</label>

                            <input
                                type="text"
                                name="author"
                                value={book.author}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="edit-form-group">
                            <label>Category</label>

                            <input
                                type="text"
                                name="category"
                                value={book.category}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="edit-form-group">
                            <label>Price</label>

                            <input
                                type="number"
                                name="price"
                                value={book.price}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="edit-form-group">
                            <label>Quantity</label>

                            <input
                                type="number"
                                name="quantity"
                                value={book.quantity}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="edit-form-group">
                            <label>Published Year</label>

                            <input
                                type="number"
                                name="publishedYear"
                                value={book.publishedYear}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="update-btn"
                        >
                            Update Book
                        </button>

                    </form>

                </div>

            </div>

        </>

    );

}

export default EditBook;