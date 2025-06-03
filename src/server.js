import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./config/db.js";
import postRoutes from "./routes/posts.js"

dotenv.config();

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectDB();


//routes

app.use('/api/posts', postRoutes)

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));

