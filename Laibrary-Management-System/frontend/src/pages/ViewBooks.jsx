import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import API from "../services/api";
import "./ViewBooks.css";

function ViewBooks() {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await API.get(
                "/books",
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            setBooks(response.data.books);

        } catch (error) {

            console.log(error);

            alert("Failed to load books");

        }

    };

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <>

            <Navbar />

            <div className="view-books">

                <div className="header">

                    <div>

                        <h1>📚 Library Books</h1>

                        <p className="total-books">
                            Total Books : {filteredBooks.length}
                        </p>

                    </div>

                    <div className="search-box">

                        <input
                            type="text"
                            placeholder="Search by title..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div>

                </div>

                {

                    filteredBooks.length === 0 ?

                        <div className="no-books">
                            No Books Found
                        </div>

                        :

                        <div className="book-grid">

                            {

                                filteredBooks.map((book) => (

                                    <BookCard
                                        key={book._id}
                                        book={book}
                                        fetchBooks={fetchBooks}
                                    />

                                ))

                            }

                        </div>

                }

            </div>

        </>

    );

}

export default ViewBooks;