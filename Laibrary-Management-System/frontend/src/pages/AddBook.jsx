import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./AddBook.css";

function AddBook() {

    const navigate = useNavigate();

    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        category: "",
        price: "",
        quantity: "",
        publishedYear: ""
    });

    const handleChange = (e) => {

        setBookData({
            ...bookData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            const response = await API.post(
                "/books",
                bookData,
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            alert(response.data.message);

            setBookData({
                title: "",
                author: "",
                category: "",
                price: "",
                quantity: "",
                publishedYear: ""
            });

            navigate("/view-books");

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to add book"
            );

        }

    };

    return (

        <div className="add-book-container">

            <div className="add-book-card">

                <h1>📚 Add New Book</h1>

                <p>Fill in the details below to add a new book.</p>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Book Title</label>
                        <input
                            type="text"
                            name="title"
                            value={bookData.title}
                            onChange={handleChange}
                            placeholder="Enter Book Title"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Author</label>
                        <input
                            type="text"
                            name="author"
                            value={bookData.author}
                            onChange={handleChange}
                            placeholder="Enter Author Name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <input
                            type="text"
                            name="category"
                            value={bookData.category}
                            onChange={handleChange}
                            placeholder="Enter Category"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Price (₹)</label>
                        <input
                            type="number"
                            name="price"
                            value={bookData.price}
                            onChange={handleChange}
                            placeholder="Enter Price"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={bookData.quantity}
                            onChange={handleChange}
                            placeholder="Enter Quantity"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Published Year</label>
                        <input
                            type="number"
                            name="publishedYear"
                            value={bookData.publishedYear}
                            onChange={handleChange}
                            placeholder="Enter Published Year"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="add-btn"
                    >
                        Add Book
                    </button>

                    <button
                        type="button"
                        className="add-btn"
                        style={{
                            marginTop: "15px",
                            background: "#2563eb"
                        }}
                        onClick={() => navigate("/dashboard")}
                    >
                        Back to Dashboard
                    </button>

                </form>

            </div>

        </div>

    );

}

export default AddBook;