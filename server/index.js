import express from "express"
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoute from "./routes/user.js"
dotenv.config();

const app=express();
app.use(express.json());



app.use("/user",userRoute)

mongoose.connect(process.env.MONGO_URI)  .then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Failed to connect to MongoDB", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

