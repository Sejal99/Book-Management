import express from 'express'
import { createBook, deleteBook, getAllBooks } from '../controllers/books.js';
import { verifyToken } from '../middlewares/auth.js';
const router=express.Router();

router.post("/create",verifyToken,createBook);
router.get("/allBooks",getAllBooks);
router.delete('/deleteBook/:id',verifyToken,deleteBook);


export default router;