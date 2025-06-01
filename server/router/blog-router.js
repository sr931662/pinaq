const express = require("express");
const router = express.Router();
const blogController = require("../controller/blog-controller");
const authMiddleware = require("../middleware/auth-middleware");

// ========== Public Routes ==========
// Get all published blogs
router.get("/public", blogController.getPublicBlogs);

// Get single published blog by slug
router.get("/public/:slug", blogController.getPublicBlogBySlug);

// ========== Admin-Only Routes ==========
router.post("/create", authMiddleware, blogController.createBlog);
router.put("/update/:blogId", authMiddleware, blogController.updateBlog);
router.delete("/delete/:blogId", authMiddleware, blogController.deleteBlog);
router.get("/all", authMiddleware, blogController.getAllBlogs);
router.get("/:blogId", authMiddleware, blogController.getSingleBlog);

module.exports = router;
