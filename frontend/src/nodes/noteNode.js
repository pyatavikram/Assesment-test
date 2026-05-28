// noteNode.js
// Annotation node with no handles — demonstrates a handle-free node for comments.

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { TextAreaField } from './fields';

export const NoteNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || 'Add your notes here...');

  return (
    <BaseNode
      id={id}
      title="Note"
      handles={[]}
    >
      <TextAreaField label="" value={text} onChange={setText} rows={3} />
    </BaseNode>
  );
};
