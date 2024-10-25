import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './gallery.css';

function Explore() {
  let { name } = useParams();
  const [postsData, setPostsData] = useState([]);

  const getPostsData = () => {
    axios.get('https://gallery-api.baradeveloper.com/public/posts')
      .then(response => {
        setPostsData(response.data.posts);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  };
  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <>
      <div className='container card my-3'>
        <h1>Hello, {name}</h1>
      </div>
      <div className="pinterest-grid m-5">
        {postsData.map((post, index) => (
          <div className="pinterest-item" key={index}>
            <img src={post.image_link} alt={`Image ${post.title} ${index + 1}`} />
            <div className="title">{post.title}</div>
            <div className="author">{post.publisher}</div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Explore;