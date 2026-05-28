// outputNode.js

import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { TextField, SelectField } from './fields';
import { useStore } from '../store';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    updateNodeField(id, 'outputName', currName);
    updateNodeField(id, 'outputType', outputType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <BaseNode
      id={id}
      title="Output"
      handles={[
        { type: 'target', position: 'left', id: 'value' },
      ]}
    >
      <TextField
        label="Name"
        nodeId={id}
        fieldName="outputName"
        value={currName}
        onChange={setCurrName}
      />
      <SelectField
        label="Type"
        nodeId={id}
        fieldName="outputType"
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

