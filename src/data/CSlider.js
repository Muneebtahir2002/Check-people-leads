import React from 'react';
import CSlider from '../small components/CSlider';
import NewApp from '../components/NewApp';

const slides = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'John Doe',
  },
  {
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    name: 'Jane Doe',
  },
  {
    text: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
    name: 'Alice Johnson',
  },
  {
    text: 'Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue.',
    name: 'Bob Smith',
  },
  {
    text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
    name: 'Emily Brown',
  },
];

const dataC = () => {
  return (
    <div>
    <NewApp slides={slides} />
  </div>
);
};

export default dataC;
