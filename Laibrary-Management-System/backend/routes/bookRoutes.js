import express from "express";

import {
    addBook,
    getAllBooks,
    updateBook,
    deleteBook
} from "../controllers/bookController.js";

import { auth, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/books", auth, isAdmin, addBook);

router.get("/books", auth, getAllBooks);

router.put("/books/:id", auth, isAdmin, updateBook);

router.delete("/books/:id", auth, isAdmin, deleteBook);

export default router;