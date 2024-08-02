import Books from "../models/books.js";
export const createBook = async (req, res) => {
  try {
    const { bookname, image, description, price } = req.body;
    console.log("ll", req.clientId);
    const userId = req.clientId;

    const newBook = await Books.create({
      bookname,
      image,
      description,
      price,
      userId,
    });
    res.json(newBook);
  } catch (error) {
    console.log(error);
  }
};
