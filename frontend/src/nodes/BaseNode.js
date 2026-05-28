// BaseNode.js
// A reusable abstraction for all pipeline nodes.
// Nodes declare their title, handles, and content — BaseNode renders everything.

import { Handle, Position } from 'reactflow';

const positionMap = {
  left: Position.Left,
  right: Position.Right,
  top: Position.Top,
  bottom: Position.Bottom,
};

export const BaseNode = ({ id, title, handles = [], style = {}, className = '', children }) => {
  return (
    <div className={`base-node ${className}`} style={style}>
      <div className="base-node__header">
        <span className="base-node__title">{title}</span>
      </div>
      <div className="base-node__content">
        {children}
      </div>
      {handles.map((handle, index) => {
        const totalOfType = handles.filter(
          (h) => h.position === handle.position && h.type === handle.type
        ).length;
        const indexOfType = handles
          .filter((h) => h.position === handle.position && h.type === handle.type)
          .indexOf(handle);

        // Auto-space multiple handles on the same side
        const offset =
          totalOfType > 1
            ? `${((indexOfType + 1) / (totalOfType + 1)) * 100}%`
            : '50%';

        const isVertical =
          handle.position === 'left' || handle.position === 'right';

        return (
          <Handle
            key={handle.id || `${handle.type}-${index}`}
            type={handle.type}
            position={positionMap[handle.position]}
            id={`${id}-${handle.id}`}
            style={{
              ...(isVertical ? { top: offset } : { left: offset }),
              ...handle.style,
            }}
          />
        );
      })}
    </div>
  );
};
