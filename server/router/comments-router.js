// router/comments-router.js
const express = require("express");
const router = express.Router();
const commentController = require("../controller/comments-controller");
const authMiddleware = require("../middleware/auth-middleware");

// Public routes
router.get("/blog/:blogId", commentController.getBlogComments);

// Authenticated routes
router.post("/create", authMiddleware, commentController.createComment);
router.put("/update/:commentId", authMiddleware, commentController.updateComment);
router.delete("/delete/:commentId", authMiddleware, commentController.deleteComment);
router.post("/like/:commentId", authMiddleware, commentController.toggleLike);

// Admin routes
router.patch("/approve/:commentId", authMiddleware, commentController.approveComment);

module.exports = router;