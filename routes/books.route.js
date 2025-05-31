import express from "express";
import { createBook, deleteBook, getAllBooks, updateBook } from "../controller/books.controller.js";

const router = express.Router();

router.get('/', getAllBooks)

router.post('/', createBook)

router.put('/:id', updateBook)

router.delete('/:id', deleteBook)

export default router