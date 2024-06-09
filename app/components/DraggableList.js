import React, { useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DraggableList = ({ items }) => {
  const [itemsState, setItemsState] = useState(items);

  const moveItem = (dragIndex, hoverIndex) => {
    const draggedItem = itemsState[dragIndex];
    const updatedItems = [...itemsState];
    updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, draggedItem);
    setItemsState(updatedItems);
  };

  const Item = ({ item, index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: 'ITEM',
      item: { id: item.id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: 'ITEM',
      hover: (item) => {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        moveItem(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    });

    const opacity = isDragging ? 0.5 : 1;

    return (
      <div
        ref={(node) => drag(drop(node))}
        className={`list-item ${isDragging ? 'dragging' : ''}`}
        style={{ opacity }}
      >
        <img src={item.img} alt={item.title} className="list-item-img" />
        <div className="content">
          <div className="title">{item.title}</div>
          <div className="subtitle">
            <img src="/images/map.png" alt="Icon" className="subtitle-icon" />
            <span>   </span>
            <span>{item.subtitle}</span> 
          </div>
         
        </div>
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="list-container">
        {itemsState.map((item, index) => (
          <Item key={item.id} item={item} index={index} />
        ))}
      </div>
    </DndProvider>
  );
};

export default DraggableList;
