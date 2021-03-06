import React, { useState } from 'react';
import { useDispatch } from '../../state/BlogProvider';
import { createBlog } from '../../actions/postActions';

const BlogForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createBlog({ title, body }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="title"
        value={title}
        onChange={({ target }) => setTitle(target.value)} 
      />
      <input
        type="body"
        placeholder="body"
        value={body}
        onChange={({ target }) => setBody(target.value)}
      />
      <button>Create Blog</button>
    </form>
  );
};

export default BlogForm;
