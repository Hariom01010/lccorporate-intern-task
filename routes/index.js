import express from "express"
import booksRouter from "./books.route.js"

const router = express.Router();

router.use('/books', booksRouter)

export default router