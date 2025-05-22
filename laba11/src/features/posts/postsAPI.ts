import axios from 'axios';
import { Post, NewPost } from './types';

const API_BASE_URL = 'http://localhost:3001';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get('/posts');
  return response.data;
};

export const createPost = async (newPost: NewPost): Promise<Post> => {
  const response = await apiClient.post('/posts', newPost);
  return response.data;
};

export const updatePost = async (post: Post): Promise<Post> => {
  const response = await apiClient.put(`/posts/${post.id}`, post);
  return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
  await apiClient.delete(`/posts/${id}`);
};