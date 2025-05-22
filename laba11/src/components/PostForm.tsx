import React, { useState, useEffect, FormEvent } from 'react';
import { Post, NewPost } from '../features/posts/types';

interface PostFormProps {
  onSubmit: (postData: NewPost | Post) => void;
  initialData?: Post | null; 
  isEditing?: boolean;      
  onCancelEdit?: () => void; 
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit, initialData = null, isEditing = false, onCancelEdit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setBody(initialData.body);
    } else {
      setTitle('');
      setBody('');
    }
  }, [initialData]); 

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
        alert('Title and body are required.');
        return;
    }

    if (isEditing && initialData) {
      onSubmit({ ...initialData, title, body });
    } else {
      onSubmit({ title, body }); 
      setTitle('');
      setBody('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h3>{isEditing ? 'Edit Post' : 'Add New Post'}</h3>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '95%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="body" style={{ display: 'block', marginBottom: '5px' }}>Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows={4}
          style={{ width: '95%', padding: '8px' }}
        />
      </div>
      <button type="submit" style={{ padding: '8px 15px', marginRight: '10px' }}>
        {isEditing ? 'Update Post' : 'Add Post'}
      </button>
      {isEditing && onCancelEdit && (
        <button type="button" onClick={onCancelEdit} style={{ padding: '8px 15px' }}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default PostForm;