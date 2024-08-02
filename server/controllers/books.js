import Books from "../models/books.js"
export const createBook=async(req,res)=>{
    try {
        const{bookname,image,description,price}=req.body;

        const newBook=await Books.create({bookname,image,description,price});
        res.json(newBook)
    } catch (error) {
        console.log(error);
        
    }
  
}