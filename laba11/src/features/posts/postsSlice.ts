import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import * as postsAPI from './postsAPI';
import { RootState } from '../../app/store'; 
import { Post, NewPost, PostsState } from './types';

export const fetchPostsAsync = createAsyncThunk<Post[]>(
  'posts/fetchPosts',
  async () => {
    const response = await postsAPI.fetchPosts();
    return response;
  }
);

export const addPostAsync = createAsyncThunk<Post, NewPost>(
  'posts/addPost',
  async (newPost) => {
    const postWithUser = { userId: 1, ...newPost }; 
    const response = await postsAPI.createPost(postWithUser);
    return response;
  }
);

export const updatePostAsync = createAsyncThunk<Post, Post>(
  'posts/updatePost',
  async (post) => {
    const response = await postsAPI.updatePost(post);
    return response;
  }
);

export const deletePostAsync = createAsyncThunk<number, number>(
  'posts/deletePost',
  async (id) => {
    await postsAPI.deletePost(id);
    return id;
  }
);

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch posts';
      })
      .addCase(addPostAsync.fulfilled, (state, action: PayloadAction<Post>) => {
        state.posts.unshift(action.payload);
         state.status = 'succeeded';
      })
       .addCase(addPostAsync.rejected, (state, action) => {
        state.status = 'failed'; 
        state.error = action.error.message || 'Failed to add post';
       })
      .addCase(updatePostAsync.fulfilled, (state, action: PayloadAction<Post>) => {
        const index = state.posts.findIndex(post => post.id === action.payload.id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
         state.status = 'succeeded';
      })
       .addCase(updatePostAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update post';
       })
      .addCase(deletePostAsync.fulfilled, (state, action: PayloadAction<number>) => {
        state.posts = state.posts.filter(post => post.id !== action.payload);
         state.status = 'succeeded';
      })
      .addCase(deletePostAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to delete post';
       });
  },
});

export const selectAllPosts = (state: RootState): Post[] => state.posts.posts;
export const selectPostsStatus = (state: RootState): string => state.posts.status;
export const selectPostsError = (state: RootState): string | null => state.posts.error;

export default postsSlice.reducer;