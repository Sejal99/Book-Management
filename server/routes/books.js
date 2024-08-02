import express from 'express'
import { createBook } from '../controllers/books.js';
import { verifyToken } from '../middlewares/auth.js';
const router=express.Router();

router.post("/create",verifyToken,createBook);




export default router;