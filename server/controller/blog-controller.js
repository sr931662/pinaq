const Blog = require("../database/blogSchema");
const User = require("../database/userSchema");
const { ObjectId } = require("mongoose").Types;

// ========================
// ✅ Create New Blog (Admin Only)
// ========================
exports.createBlog = async (req, res) => {
  try {
    const { title, slug, excerpt, content, featuredImage, category, tags, readTime, metaTitle, metaDescription, isFeatured } = req.body;

    // Ensure the user is an admin
    const user = await User.findById(req.user.id);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ msg: "Access denied. Admins only." });
    }

    // Check if the slug already exists
    const existingSlug = await Blog.findOne({ slug });
    if (existingSlug) {
      return res.status(400).json({ msg: "Slug must be unique." });
    }

    // Create the new blog
    const newBlog = new Blog({
      title,
      slug,
      excerpt,
      content,
      featuredImage,
      category,
      tags,
      author: req.user.id,
      readTime,
      metaTitle,
      metaDescription,
      isFeatured,
      status: 'draft', // Default status is 'draft'
    });

    await newBlog.save();

    res.status(201).json({
      msg: "Blog created successfully",
      blog: newBlog
    });
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// ==========================
// ✅ Update Blog (Admin Only)
// ==========================
exports.updateBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { title, slug, excerpt, content, featuredImage, category, tags, readTime, status, metaTitle, metaDescription, isFeatured } = req.body;

    // Ensure the user is an admin
    const user = await User.findById(req.user.id);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ msg: "Access denied. Admins only." });
    }

    // Check if the blog exists
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    // Update blog details
    blog.title = title || blog.title;
    blog.slug = slug || blog.slug;
    blog.excerpt = excerpt || blog.excerpt;
    blog.content = content || blog.content;
    blog.featuredImage = featuredImage || blog.featuredImage;
    blog.category = category || blog.category;
    blog.tags = tags || blog.tags;
    blog.readTime = readTime || blog.readTime;
    blog.status = status || blog.status;
    blog.metaTitle = metaTitle || blog.metaTitle;
    blog.metaDescription = metaDescription || blog.metaDescription;
    blog.isFeatured = isFeatured !== undefined ? isFeatured : blog.isFeatured;

    await blog.save();

    res.status(200).json({
      msg: "Blog updated successfully",
      blog
    });
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// ===========================
// ✅ Delete Blog (Admin Only)
// ===========================
exports.deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    // Ensure the user is an admin
    const user = await User.findById(req.user.id);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ msg: "Access denied. Admins only." });
    }

    // Check if the blog exists
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    await blog.remove();

    res.status(200).json({
      msg: "Blog deleted successfully"
    });
  } catch (err) {
    console.error("Error deleting blog:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// ==========================
// ✅ Get All Blogs (Admin Only)
// ==========================
exports.getAllBlogs = async (req, res) => {
  try {
    // Ensure the user is an admin
    const user = await User.findById(req.user.id);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ msg: "Access denied. Admins only." });
    }

    // Removed .populate('category') since the model doesn't exist
    const blogs = await Blog.find().populate('author', 'fullName email').sort({ createdAt: -1 });

    res.status(200).json({
      msg: "Blogs retrieved successfully",
      blogs
    });
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// ==============================
// ✅ Get Single Blog (Admin Only)
// ==============================
exports.getSingleBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    // Ensure the user is an admin
    const user = await User.findById(req.user.id);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ msg: "Access denied. Admins only." });
    }

    const blog = await Blog.findById(blogId).populate('category').populate('author', 'fullName email');
    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    res.status(200).json({
      msg: "Blog retrieved successfully",
      blog
    });
  } catch (err) {
    console.error("Error fetching blog:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};
// ✅ Public - Get all published blogs
exports.getPublicBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ status: "published" })
      .populate("author", "fullName") // Only populate author (since category model doesn't exist)
      .sort({ publishedAt: -1 });

    res.status(200).json({ 
      success: true,
      count: blogs.length,
      blogs 
    });
  } catch (err) {
    console.error("Error fetching public blogs:", err);
    res.status(500).json({ 
      success: false,
      msg: "Server error" 
    });
  }
};

// ✅ Public - Get single blog by slug
exports.getPublicBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, status: "published" })
      .populate("category")
      .populate("author", "fullName");

    if (!blog) return res.status(404).json({ msg: "Blog not found" });

    res.status(200).json({ blog });
  } catch (err) {
    console.error("Error fetching public blog:", err);
    res.status(500).json({ msg: "Server error" });
  }
};
