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

export const getAllBooks = async (req, res) => {
  try {
    const books = await Books.find();
    res.json(books);
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Books.findByIdAndDelete(id);

    res.status(200).json({ message: "book deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const updatedBook = async (req, res) => {
  const { id } = req.params;
  try {
    const { bookname, image, description, price } = req.body;
    const updateBook = await Books.findByIdAndUpdate(id, {
      bookname,
      image,
      description,
      price,
    });
    res.json(updateBook);
  } catch (error) {
    console.log(error);
  }
};

export const userBooks = async (req, res) => {
  console.log("ooooo");

  const userId = req.clientId;
  console.log(userId);

  try {
    const singleBook = await Books.find({ userId });
    res.json(singleBook);
  } catch (error) {
    console.log(error);
  }
};
