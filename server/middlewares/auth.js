import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
     const token = req.headers.authorization;
    console.log(token);
    
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log(verified);
    
    req.user = { userId: verified.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};




