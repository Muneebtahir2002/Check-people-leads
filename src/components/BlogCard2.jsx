import React from 'react';
import { useParams } from 'react-router-dom';
import { dummydata } from '../data/DummyData';


function BlogCard() {
  const { name } = useParams();

  const blogEntry = dummydata.find(entry => entry.title === name);


  return (
    <div>
      <h1>{blogEntry.title}</h1>
      <p>{blogEntry.text}</p>
    </div>
  );
}

export default BlogCard;