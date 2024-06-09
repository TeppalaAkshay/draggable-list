"use client";

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import 'tailwindcss/tailwind.css';

const initialItems = [
  {
    id: '1',
    title: 'Scotland Island',
    location: 'Sydney, Australia',
    img: 'https://via.placeholder.com/150'
  },
  {
    id: '2',
    title: 'The Charles Grand Brasserie & Bar',
    location: 'Lorem ipsum, Dolor',
    img: 'https://via.placeholder.com/150'
  },
  {
    id: '3',
    title: 'Bridge Climb',
    location: 'Dolor, Sit amet',
    img: 'https://via.placeholder.com/150'
  },
  {
    id: '4',
    title: 'Scotland Island',
    location: 'Sydney, Australia',
    img: 'https://via.placeholder.com/150'
  },
  {
    id: '5',
    title: 'Clam Bar',
    location: 'Etcetera veni, Vidi vici',
    img: 'https://via.placeholder.com/150'
  },
  {
    id: '6',
    title: 'Vivid Festival',
    location: 'Sydney, Australia',
    img: 'https://via.placeholder.com/150'
  }
];

const DraggableList = () => {
  const [items, setItems] = useState(initialItems);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const updatedItems = Array.from(items);
    const [reorderedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, reorderedItem);

    setItems(updatedItems);
  };

  return (
    <div className="fixed top-2 left-[1026px] w-[568px] h-[946px] gap-0 opacity-100 p-4 bg-gray-100 overflow-auto">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {items.map(({ id, title, location, img }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`p-4 bg-white rounded-md shadow-md ${
                        snapshot.isDragging ? 'opacity-75' : 'opacity-100'
                      }`}
                    >
                      <img src={img} alt={title} className="w-full h-32 object-cover rounded-md" />
                      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                      <p className="text-gray-600">{location}</p>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Draggable List</h1>
      <DraggableList />
    </div>
  );
};

export default Home;
