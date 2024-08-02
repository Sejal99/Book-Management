import express from 'express'
import { createBook } from '../controllers/books.js';
const router=express.Router();
router.post("/create",createBook);




export default router;