// textNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { TextField } from './fields';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode
      id={id}
      title="Text"
      handles={[
        { type: 'source', position: 'right', id: 'output' },
      ]}
    >
      <TextField label="Text" value={currText} onChange={setCurrText} />
    </BaseNode>
  );
};
