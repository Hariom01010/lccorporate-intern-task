import mongoose from "mongoose";
import Book from "../model/books.model.js"

export const getAllBooks = async(req,res)=>{
    try{
        const books = await Book.find({});
        res.status(200).json(books);
    }catch(error){
        console.log(error)
    }
}

export const createBook = async(req,res)=>{
    try{
        const {title, author, price, publishDate} = req.body;
        const newBook = await Book.create({title, author, price, publishDate})

        res.status(200).json({newBook});
    }catch(error){
        console.log(error)
    }
}

export const updateBook = async(req, res)=>{
    try{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).send("Not a valid book id")
        }
        const newData = req.body;

        const updatedBook = await Book.findByIdAndUpdate(id, newData)
        if(!updatedBook){
            res.status(404).send("Book not found")
        }
        res.status(200).json(updatedBook)
    }catch(error){
        console.log(error)
    }
}

export const deleteBook = async(req, res)=>{
    try{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).send("Not a valid book id")
        }

        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook){
            res.status(400).send("Book not found")
        }
        res.status(200).json(deletedBook)
    }catch(error){
        console.log(error)
    }
}