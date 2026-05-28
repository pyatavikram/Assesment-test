// textNode.js

import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { TextField } from './fields';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    updateNodeField(id, 'text', currText);
  }, [id, updateNodeField]);

  return (
    <BaseNode
      id={id}
      title="Text"
      handles={[
        { type: 'source', position: 'right', id: 'output' },
      ]}
    >
      <TextField
        label="Text"
        nodeId={id}
        fieldName="text"
        value={currText}
        onChange={setCurrText}
      />
    </BaseNode>
  );
};

