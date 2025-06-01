// server.js (updated)
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./database/dbConnect");
const blogRouter = require("./router/blog-router");
const authRouter = require("./router/auth-router");
const commentRouter = require("./router/comments-router"); // Add this line

const app = express();

connectDB();

const corsOptions = {
  origin: ["http://localhost:3000", 'https://pinaq-1.onrender.com', 'https://pinaq.vercel.app'],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/comments", commentRouter); // Add this line

app.get("/", (req, res) => {
  res.status(200).send("Home page updated");
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});