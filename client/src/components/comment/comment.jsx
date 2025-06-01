import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './comment.module.css';

const CommentsSection = () => {
  const { blogId } = useParams();
  const { user } = useSelector(state => state.auth);
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState('');
  const [page, setPage] = useState(1);
  const [totalComments, setTotalComments] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchComments = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/comments/${blogId}?page=${page}`);
      setComments(res.data.comments);
      setTotalComments(res.data.totalComments);
    } catch (err) {
      setError(err.response?.data?.msg || 'Error fetching comments');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [blogId, page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      const commentData = {
        blogId,
        content
      };

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: user?.token ? `Bearer ${user.token}` : undefined
        }
      };

      const res = await axios.post('/api/comments', commentData, config);
      
      setComments(prev => [res.data.comment, ...prev]);
      setContent('');
      setTotalComments(prev => prev + 1);
    } catch (err) {
      setError(err.response?.data?.msg || 'Error posting comment');
    }
  };

  const handleLike = async (commentId) => {
    if (!user) {
      setError('Please login to like comments');
      return;
    }

    try {
      await axios.post(`/api/comments/${commentId}/like`, {}, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      fetchComments(); // Refresh comments
    } catch (err) {
      setError(err.response?.data?.msg || 'Error liking comment');
    }
  };

  return (
    <div className="comments-section">
      <h3>Comments ({totalComments})</h3>
      
      {error && <div className="error-message">{error}</div>}

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write a comment..."
          required
        />
        <button type="submit" disabled={loading}>
          Post Comment
        </button>
      </form>

      {/* Comments List */}
      {loading && page === 1 ? (
        <div>Loading comments...</div>
      ) : comments.length === 0 ? (
        <div>No comments yet. Be the first to comment!</div>
      ) : (
        <div className="comments-list">
          {comments.map(comment => (
            <CommentItem
              key={comment._id}
              comment={comment}
              user={user}
              onLike={handleLike}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalComments > comments.length && (
        <button 
          onClick={() => setPage(prev => prev + 1)}
          disabled={loading}
        >
          Load More
        </button>
      )}
    </div>
  );
};

const CommentItem = ({ comment, user, onLike }) => {
  const isOwnComment = user && comment.user?._id === user._id;
  const isApproved = comment.isApproved || isOwnComment;

  if (!isApproved) {
    return (
      <div className="comment pending-approval">
        <p>This comment is pending approval</p>
      </div>
    );
  }

  return (
    <div className="comment">
      <div className="comment-header">
        <span className="comment-author">
          {comment.username || 'Anonymous'}
        </span>
        <span className="comment-date">
          {new Date(comment.createdAt).toLocaleString()}
        </span>
      </div>
      
      <div className="comment-content">{comment.content}</div>
      
      <div className="comment-actions">
        {user && (
          <button 
            onClick={() => onLike(comment._id)}
            className={`like-btn ${comment.likes?.includes(user._id) ? 'liked' : ''}`}
          >
            Like ({comment.likes?.length || 0})
          </button>
        )}
        
        {comment.isEdited && (
          <span className="edited">(edited)</span>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;