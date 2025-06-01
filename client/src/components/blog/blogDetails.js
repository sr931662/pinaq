import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogBySlug } from '../services/blogApi';
import styles from '../components/blog/blog.module.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const data = await getBlogBySlug(slug);
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!blog) return <div className={styles.error}>Blog not found</div>;

  return (
    <div className={styles.blogDetailContainer}>
      <article className={styles.blogArticle}>
        <header>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <div className={styles.blogMeta}>
            <span className={styles.blogCategory}>{blog.category.name}</span>
            <span>•</span>
            <span>By {blog.author.fullName}</span>
            <span>•</span>
            <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
            <span>•</span>
            <span>{blog.readTime} min read</span>
          </div>
        </header>
        
        <div className={styles.blogImageContainer}>
          <img 
            src={blog.featuredImage} 
            alt={blog.title} 
            className={styles.blogImage}
          />
        </div>
        
        <div 
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      {/* Comments section would go here */}
    </div>
  );
};

export default BlogDetail;