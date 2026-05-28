// noteNode.js
// Annotation node with no handles — demonstrates a handle-free node for comments.

import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { TextAreaField } from './fields';
import { useStore } from '../store';

export const NoteNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || 'Add your notes here...');
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    updateNodeField(id, 'text', text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <BaseNode
      id={id}
      title="Note"
      handles={[]}
    >
      <TextAreaField
        label=""
        nodeId={id}
        fieldName="text"
        value={text}
        onChange={setText}
        rows={3}
      />
    </BaseNode>
  );
};

