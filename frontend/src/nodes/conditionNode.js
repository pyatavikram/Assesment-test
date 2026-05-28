// conditionNode.js
// Conditional branching — demonstrates multiple source handles (true/false outputs).

import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { TextField } from './fields';
import { useStore } from '../store';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'value > 0');
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    updateNodeField(id, 'condition', condition);
  }, [id, updateNodeField]);

  return (
    <BaseNode
      id={id}
      title="Condition"
      handles={[
        { type: 'target', position: 'left', id: 'input' },
        { type: 'source', position: 'right', id: 'true' },
        { type: 'source', position: 'right', id: 'false' },
      ]}
    >
      <TextField
        label="If"
        nodeId={id}
        fieldName="condition"
        value={condition}
        onChange={setCondition}
      />
      <div className="base-node__hint">
        <span>↗ True &nbsp; ↘ False</span>
      </div>
    </BaseNode>
  );
};

