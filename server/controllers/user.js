import User from "../models/user.js";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({ username, email, password });
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};
