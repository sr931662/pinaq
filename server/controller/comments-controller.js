// controller/comments-controller.js
const Comment = require("../database/commentSchema");
const Blog = require("../database/blogSchema");
const User = require("../database/userSchema");

// ✅ Create a new comment
exports.createComment = async (req, res) => {
  try {
    const { content, blogId, parentCommentId } = req.body;
    const userId = req.user.id;

    // Check if blog exists
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    // Check if parent comment exists if provided
    if (parentCommentId) {
      const parentComment = await Comment.findById(parentCommentId);
      if (!parentComment) {
        return res.status(404).json({ msg: "Parent comment not found" });
      }
    }

    // Create new comment
    const newComment = new Comment({
      content,
      blog: blogId,
      author: userId,
      parentComment: parentCommentId || null,
      isApproved: req.user.role === 'admin' // Auto-approve if admin
    });

    await newComment.save();

    // If it's a reply, add to parent comment's replies
    if (parentCommentId) {
      await Comment.findByIdAndUpdate(
        parentCommentId,
        { $push: { replies: newComment._id } }
      );
    }

    // Add comment to blog's comments array
    await Blog.findByIdAndUpdate(
      blogId,
      { $push: { comments: newComment._id } }
    );

    res.status(201).json({
      msg: "Comment added successfully",
      comment: newComment
    });
  } catch (err) {
    console.error("Error creating comment:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// ✅ Get comments for a blog
exports.getBlogComments = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { includeReplies = false } = req.query;

    // Check if blog exists
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    // Get top-level comments
    let query = Comment.find({ blog: blogId, parentComment: null })
      .populate("author", "fullName email")
      .sort({ createdAt: -1 });

    if (includeReplies === 'true') {
      query = query.populate({
        path: 'replies',
        populate: {
          path: 'author',
          select: 'fullName email'
        }
      });
    }

    const comments = await query.exec();

    res.status(200).json({
      msg: "Comments retrieved successfully",
      comments
    });
  } catch (err) {
    console.error("Error fetching comments:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// ✅ Update a comment (author or admin only)
exports.updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { content } = req.body;
    const userId = req.user.id;

    // Find the comment
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ msg: "Comment not found" });
    }

    // Check if user is author or admin
    if (comment.author.toString() !== userId && req.user.role !== 'admin') {
      return res.status(403).json({ msg: "Not authorized to update this comment" });
    }

    // Update comment
    comment.content = content || comment.content;
    comment.updatedAt = new Date();
    await comment.save();

    res.status(200).json({
      msg: "Comment updated successfully",
      comment
    });
  } catch (err) {
    console.error("Error updating comment:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// ✅ Delete a comment (author or admin only)
exports.deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const userId = req.user.id;

    // Find the comment
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ msg: "Comment not found" });
    }

    // Check if user is author or admin
    if (comment.author.toString() !== userId && req.user.role !== 'admin') {
      return res.status(403).json({ msg: "Not authorized to delete this comment" });
    }

    // If it's a parent comment, remove reference from blog
    if (!comment.parentComment) {
      await Blog.findByIdAndUpdate(
        comment.blog,
        { $pull: { comments: comment._id } }
      );
    }

    // If it's a reply, remove reference from parent comment
    if (comment.parentComment) {
      await Comment.findByIdAndUpdate(
        comment.parentComment,
        { $pull: { replies: comment._id } }
      );
    }

    // Delete the comment
    await comment.remove();

    res.status(200).json({
      msg: "Comment deleted successfully"
    });
  } catch (err) {
    console.error("Error deleting comment:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// ✅ Admin - Approve a comment
exports.approveComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ msg: "Admin access required" });
    }

    // Find and update the comment
    const comment = await Comment.findByIdAndUpdate(
      commentId,
      { isApproved: true },
      { new: true }
    );

    if (!comment) {
      return res.status(404).json({ msg: "Comment not found" });
    }

    res.status(200).json({
      msg: "Comment approved successfully",
      comment
    });
  } catch (err) {
    console.error("Error approving comment:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// ✅ Like/Unlike a comment
exports.toggleLike = async (req, res) => {
  try {
    const { commentId } = req.params;
    const userId = req.user.id;

    // Find the comment
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ msg: "Comment not found" });
    }

    // Check if user already liked the comment
    const likeIndex = comment.likes.indexOf(userId);
    let action;

    if (likeIndex === -1) {
      // Add like
      comment.likes.push(userId);
      action = "liked";
    } else {
      // Remove like
      comment.likes.splice(likeIndex, 1);
      action = "unliked";
    }

    await comment.save();

    res.status(200).json({
      msg: `Comment ${action} successfully`,
      likesCount: comment.likes.length,
      isLiked: action === "liked"
    });
  } catch (err) {
    console.error("Error toggling like:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};