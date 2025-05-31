import mongoose from "mongoose"
const {Schema} = mongoose;

const bookSchema = new Schema({
    title: String,
    author: String,
    price: Number,
    publishDate: {type: Date, default: Date.now}
})

const Book = new mongoose.model("Book",bookSchema)

export default Book;