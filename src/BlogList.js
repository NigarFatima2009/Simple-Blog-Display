import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/blogPosts.json')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="blog-list">
      {posts.map(post => (
        <BlogPost key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default BlogList;
