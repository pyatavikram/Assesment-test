// mergeNode.js
// Combines multiple inputs into one output — demonstrates handle-heavy node with no fields.

import { BaseNode } from './BaseNode';

export const MergeNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Merge"
      className="node--merge"
      handles={[
        { type: 'target', position: 'left', id: 'input-1' },
        { type: 'target', position: 'left', id: 'input-2' },
        { type: 'target', position: 'left', id: 'input-3' },
        { type: 'source', position: 'right', id: 'output' },
      ]}
    >
      <span className="base-node__description">Merges 3 inputs into 1 output.</span>
    </BaseNode>
  );
};
