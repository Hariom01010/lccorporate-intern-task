import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import mainRouter from "./routes/index.js";

const app = express();
const port = process.env.port || 3000;

app.use(express.json())
app.use('/api', mainRouter);

try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");

    app.listen(port, ()=>{
    console.log("Server listening on PORT 3000")
    })
} catch(error){
    console.log(error)
}

