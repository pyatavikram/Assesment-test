// outputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { TextField, SelectField } from './fields';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Output"
      handles={[
        { type: 'target', position: 'left', id: 'value' },
      ]}
    >
      <TextField label="Name" value={currName} onChange={setCurrName} />
      <SelectField
        label="Type"
        value={outputType}
        onChange={setOutputType}
        options={[
          { value: 'Text', label: 'Text' },
          { value: 'Image', label: 'Image' },
        ]}
      />
    </BaseNode>
  );
};
