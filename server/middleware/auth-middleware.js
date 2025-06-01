// middleware/auth-middleware.js

const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ msg: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded; // { id, role }
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token." });
  }
};

module.exports = authMiddleware;
