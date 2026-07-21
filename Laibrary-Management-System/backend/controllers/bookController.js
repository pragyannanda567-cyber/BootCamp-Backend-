import Book from "../models/Book.js";

// ======================= ADD BOOK =======================

export const addBook = async (req, res) => {

    try {

        const {
            title,
            author,
            category,
            price,
            quantity,
            publishedYear
        } = req.body;

        // Check if all fields are filled
        if (
            !title ||
            !author ||
            !category ||
            !price ||
            !quantity ||
            !publishedYear
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            });
        }

        // Create Book
        const book = await Book.create({
            title,
            author,
            category,
            price,
            quantity,
            publishedYear
        });

        return res.status(201).json({
            success: true,
            message: "Book Added Successfully",
            book
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

// ======================= GET ALL BOOKS =======================

export const getAllBooks = async (req, res) => {

    try {

        const books = await Book.find();

        return res.status(200).json({
            success: true,
            count: books.length,
            books
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

// ======================= UPDATE BOOK =======================

export const updateBook = async (req, res) => {

    try {

        const { id } = req.params;

        const updatedBook = await Book.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                message: "Book Not Found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Book Updated Successfully",
            updatedBook
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

// ======================= DELETE BOOK =======================

export const deleteBook = async (req, res) => {

    try {

        const { id } = req.params;

        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({
                success: false,
                message: "Book Not Found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Book Deleted Successfully"
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};