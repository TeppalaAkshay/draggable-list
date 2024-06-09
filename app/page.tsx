
'use client';
import React from 'react';
import DraggableList from './components/DraggableList'; // Corrected import path
import 'tailwindcss/tailwind.css';

const Home = () => {
  const items = [
    {
      id: '1',
      title: 'Scotland Island',
      subtitle: 'Sydney, Australia',
      img: '/images/img1.jpg'
    },
    {
      id: '2',
      title: 'The Charles Grand Brasserie & Bar',
      subtitle: 'Lorem ipsum, Dolor',
      img: '/images/img2.jpg'
    },
    {
      id: '3',
      title: 'Bridge Climb',
      subtitle: 'Dolor, Sit amet',
      img: '/images/img3.png'
    },
    {
      id: '4',
      title: 'Scotland Island',
      subtitle: 'Sydney, Australia',
      img: '/images/img4.jpg'
    },
    {
      id: '5',
      title: 'Clam Bar',
      subtitle: 'Etcetera veni, Vidi vici',
      img: '/images/img5.png'
    },
    {
      id: '6',
      title: 'Vivid Festival',
      subtitle: 'Sydney, Australia',
      img: '/images/img6.png'
    }
  ];

  return (
    <div className="frame container mx-auto p-4">
      <DraggableList items={items} />
    </div>
  );
};

export default Home;
