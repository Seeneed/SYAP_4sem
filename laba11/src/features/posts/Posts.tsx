import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchPostsAsync,
  addPostAsync,
  updatePostAsync,
  deletePostAsync,
  selectAllPosts,
  selectPostsStatus,
  selectPostsError,
} from './postsSlice';
import { Post, NewPost } from './types';
import PostItem from '../../components/PostItem';
import PostForm from '../../components/PostForm';

const Posts: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const status = useAppSelector(selectPostsStatus);
  const error = useAppSelector(selectPostsError);

  const [editingPost, setEditingPost] = useState<Post | null>(null); 

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPostsAsync());
    }
  }, [status, dispatch]); 

  const handleAddPost = (postData: NewPost | Post) => {
    if (!('id' in postData)) {
         dispatch(addPostAsync(postData));
    } else {
        console.error("Trying to add a post with an existing ID structure via add handler.");
    }
  };

  const handleUpdatePost = (postData: NewPost | Post) => {
     if ('id' in postData) {
        dispatch(updatePostAsync(postData)).then(() => {
            setEditingPost(null); 
        });
     } else {
         console.error("Trying to update a post without an ID.");
     }
  };

  const handleDeletePost = (id: number) => {
    if (window.confirm(`Are you sure you want to delete post ${id}?`)) {
         dispatch(deletePostAsync(id));
    }
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post); 
    window.scrollTo(0, 0); 
  };

  const handleCancelEdit = () => {
    setEditingPost(null); 
  };

  let content;

  if (status === 'loading' && posts.length === 0) {
    content = <p>Loading posts...</p>;
  } else if (status === 'failed') {
    content = <p style={{ color: 'red' }}>Error: {error}</p>;
  } else if (status === 'succeeded' || (status === 'loading' && posts.length > 0)) { 
    content = (
        <>
            {status === 'loading' && <p><i>Updating...</i></p>}
            {posts.map((post) => (
            <PostItem
                key={post.id}
                post={post}
                onDelete={handleDeletePost}
                onEdit={handleEdit}
            />
            ))}
       </>
    );
  } else {
     content = <p>Loading...</p>; 
  }


  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Posts Management</h2>

      {}
      <PostForm
        onSubmit={editingPost ? handleUpdatePost : handleAddPost}
        initialData={editingPost}
        isEditing={!!editingPost}
        onCancelEdit={handleCancelEdit}
      />

      <hr style={{ margin: '20px 0' }}/>

      <h3>Posts List</h3>
      {content}
    </div>
  );
};

export default Posts;