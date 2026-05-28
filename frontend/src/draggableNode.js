// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType };
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className="draggable-node-card"
        onDragStart={(event) => onDragStart(event, type)}
        draggable
      >
          <span className="draggable-node-card__label">{label}</span>
      </div>
    );
  };

  