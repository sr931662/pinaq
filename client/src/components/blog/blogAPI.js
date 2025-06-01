import axios from 'axios';

const API_BASE_URL = 'http://localhost:3005/api/blogs'; // Update with your backend URL

// Public endpoints
export const getPublicBlogs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/public`);
    return response.data.blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

export const getBlogBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/public/${slug}`);
    return response.data.blog;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};

export const searchBlogs = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/public/search?query=${query}`);
    return response.data.blogs;
  } catch (error) {
    console.error('Error searching blogs:', error);
    throw error;
  }
};

export const getBlogsByCategory = async (categoryId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/public/category/${categoryId}`);
    return response.data.blogs;
  } catch (error) {
    console.error('Error fetching blogs by category:', error);
    throw error;
  }
};

// For authenticated requests
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Add other authenticated endpoints as needed...