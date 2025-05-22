import React from 'react';
import { Post } from '../features/posts/types';

interface PostItemProps {
  post: Post;
  onDelete: (id: number) => void;
  onEdit: (post: Post) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onDelete, onEdit }) => {
  return (
    <div style={{ border: '1px solid #eee', padding: '15px', marginBottom: '10px', borderRadius: '5px' }}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <small>ID: {post.id}, UserID: {post.userId}</small>
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => onEdit(post)} style={{ marginRight: '10px', padding: '5px 10px' }}>
          Edit
        </button>
        <button onClick={() => onDelete(post.id)} style={{ padding: '5px 10px', background: '#f44336', color: 'white', border: 'none' }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostItem;