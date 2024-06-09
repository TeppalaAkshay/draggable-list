// components/DraggableList.js
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const items = [
  {
    id: '1',
    title: 'Scotland Island',
    subtitle: 'Sydney, Australia',
    img: 'path-to-your-image-1.jpg'
  },
  {
    id: '2',
    title: 'The Charles Grand Brasserie & Bar',
    subtitle: 'Lorem ipsum, Dolor',
    img: 'path-to-your-image-2.jpg'
  },
  {
    id: '3',
    title: 'Bridge Climb',
    subtitle: 'Dolor, Sit amet',
    img: 'path-to-your-image-3.jpg'
  },
  {
    id: '4',
    title: 'Scotland Island',
    subtitle: 'Sydney, Australia',
    img: 'path-to-your-image-4.jpg'
  },
  {
    id: '5',
    title: 'Clam Bar',
    subtitle: 'Etcetera veni, Vidi vici',
    img: 'path-to-your-image-5.jpg'
  },
  {
    id: '6',
    title: 'Vivid Festival',
    subtitle: 'Sydney, Australia',
    img: 'path-to-your-image-6.jpg'
  }
];

const DraggableList = () => {
  const [list, setList] = React.useState(items);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const updatedList = Array.from(list);
    const [reorderedItem] = updatedList.splice(result.source.index, 1);
    updatedList.splice(result.destination.index, 0, reorderedItem);
    setList(updatedList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div className="list-container" ref={provided.innerRef} {...provided.droppableProps}>
            {list.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    className={`list-item ${snapshot.isDragging ? 'dragging' : ''}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <img src={item.img} alt={item.title} />
                    <div className="content">
                      <div className="title">{item.title}</div>
                      <div className="subtitle">{item.subtitle}</div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
