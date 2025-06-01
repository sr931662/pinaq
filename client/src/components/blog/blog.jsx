import React, { useState, useEffect, useMemo } from 'react';
import { getPublicBlogs, searchBlogs } from './blogAPI';
import styles from './blog.module.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Topics');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPublicBlogs();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Memoized categories to prevent unnecessary recalculations
  const categories = useMemo(() => {
    const uniqueCategories = new Set(blogs.map(blog => blog.category.name));
    return ['All Topics', ...uniqueCategories];
  }, [blogs]);

  // Memoized filtered blogs based on search and category
  const filteredBlogs = useMemo(() => {
    if (activeCategory === 'All Topics') {
      return blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return blogs.filter(blog => 
      blog.category.name === activeCategory &&
      (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [blogs, activeCategory, searchTerm]);

  // Memoized featured posts
  const featuredPosts = useMemo(() => 
    blogs.filter(blog => blog.isFeatured).slice(0, 3),
    [blogs]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is now handled in the filteredBlogs memoization
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!blogs.length) return <div className={styles.empty}>No blog posts found</div>;

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Developer Insights</h1>
            <p className={styles.heroSubtitle}>
              Discover the latest trends, tutorials, and best practices in web development
            </p>
            
            <form onSubmit={handleSearch} className={styles.searchContainer}>
              <div className={styles.searchIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input
                type="search"
                placeholder="Search articles..."
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className={styles.searchButton}>
                Search
              </button>
            </form>

            <div className={styles.filterContainer}>
              <div className={styles.filterPills}>
                {categories.map(category => (
                  <button
                    key={category}
                    className={`${styles.filterPill} ${activeCategory === category ? styles.filterPillActive : ''}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className={styles.featuredPosts}>
          <div className={styles.featuredContainer}>
            <h2 className={styles.sectionTitle}>Featured Articles</h2>
            <div className={styles.featuredGrid}>
              {featuredPosts.map(post => (
                <article key={post._id} className={styles.blogCard}>
                  <div className={styles.cardImageContainer}>
                    <div 
                      className={styles.cardImage} 
                      style={{ backgroundImage: `url('${post.featuredImage}')` }}
                      aria-label={`Featured image for ${post.title}`}
                    />
                    <span className={styles.categoryBadge}>{post.category.name}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h3>
                    <div className={styles.cardMeta}>
                      <div className={styles.author}>
                        <div 
                          className={styles.authorImage}
                          style={{ backgroundImage: `url('${post.author.avatar}')` }}
                          aria-label={`${post.author.fullName}'s avatar`}
                        />
                        <span>{post.author.fullName}</span>
                      </div>
                      <span className={styles.metaDivider}>•</span>
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </time>
                      <span className={styles.metaDivider}>•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  </div>
                  <div className={styles.cardFooter}>
                    <a href={`/blog/${post.slug}`} className={styles.readMoreLink}>
                      <span>Read Article</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <section className={styles.mainContent}>
        <div className={styles.mainContainer}>
          <div className={styles.contentLayout}>
            {/* Main Content */}
            <main className={styles.contentMain}>
              <div className={styles.contentHeader}>
                <h2 className={styles.sectionTitle}>Latest Articles</h2>
                <div className={styles.sortContainer}>
                  <label htmlFor="sort-select" className={styles.sortLabel}>Sort by:</label>
                  <select id="sort-select" className={styles.sortSelect}>
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Trending</option>
                  </select>
                </div>
              </div>
              
              {/* Article List */}
              <div className={styles.articleList}>
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map(post => (
                    <article key={post._id} className={styles.articleCard}>
                      <div className={styles.articleFlex}>
                        <div className={styles.articleImageContainer}>
                          <div 
                            className={styles.articleImage} 
                            style={{ backgroundImage: `url('${post.featuredImage}')` }}
                            aria-label={`Featured image for ${post.title}`}
                          />
                        </div>
                        <div className={styles.articleContent}>
                          <div className={styles.articleBadges}>
                            <span className={styles.articleBadge}>{post.category.name}</span>
                          </div>
                          <h3 className={styles.articleTitle}>
                            <a href={`/blog/${post.slug}`}>{post.title}</a>
                          </h3>
                          <div className={styles.articleMeta}>
                            <time dateTime={post.publishedAt}>
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </time>
                            <span className={styles.metaDivider}>•</span>
                            <span>{post.readTime} min read</span>
                          </div>
                          <p className={styles.articleExcerpt}>{post.excerpt}</p>
                          <a href={`/blog/${post.slug}`} className={styles.readMoreLink}>
                            <span>Read More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className={styles.emptyResults}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <h3>No articles found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                  </div>
                )}
              </div>
            </main>
            
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Categories Widget */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Categories</h3>
                <ul className={styles.categoryList}>
                  {categories.map(category => {
                    const count = blogs.filter(blog => 
                      category === 'All Topics' || blog.category.name === category
                    ).length;
                    return (
                      <li key={category} className={styles.categoryItem}>
                        <button
                          className={`${styles.categoryLink} ${activeCategory === category ? styles.categoryLinkActive : ''}`}
                          onClick={() => handleCategoryChange(category)}
                        >
                          {category}
                        </button>
                        <span className={styles.categoryCount}>{count}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              {/* Popular Posts Widget */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Popular Posts</h3>
                <div className={styles.popularPosts}>
                  {blogs
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 4)
                    .map(post => (
                      <div key={post._id} className={styles.popularPost}>
                        <div 
                          className={styles.popularPostImage} 
                          style={{ backgroundImage: `url('${post.featuredImage}')` }}
                          aria-label={`Featured image for ${post.title}`}
                        />
                        <div className={styles.popularPostContent}>
                          <h4 className={styles.popularPostTitle}>
                            <a href={`/blog/${post.slug}`}>{post.title}</a>
                          </h4>
                          <p className={styles.popularPostDate}>
                            <time dateTime={post.publishedAt}>
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </time>
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              
              {/* Newsletter Widget */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Newsletter</h3>
                <p className={styles.widgetDescription}>
                  Get the latest articles and news delivered to your inbox
                </p>
                <form className={styles.newsletterForm}>
                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className={styles.formInput}
                      required
                    />
                  </div>
                  <div className={styles.checkboxGroup}>
                    <input 
                      type="checkbox" 
                      id="newsletter-consent" 
                      className={styles.checkboxInput}
                      required
                    />
                    <label htmlFor="newsletter-consent" className={styles.checkboxLabel}>
                      I agree to receive email updates
                    </label>
                  </div>
                  <button type="submit" className={styles.subscribeButton}>
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;