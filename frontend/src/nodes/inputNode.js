// inputNode.js

import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { TextField, SelectField } from './fields';
import { useStore } from '../store';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    updateNodeField(id, 'inputName', currName);
    updateNodeField(id, 'inputType', inputType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <BaseNode
      id={id}
      title="Input"
      handles={[
        { type: 'source', position: 'right', id: 'value' },
      ]}
    >
      <TextField
        label="Name"
        nodeId={id}
        fieldName="inputName"
        value={currName}
        onChange={setCurrName}
      />
      <SelectField
        label="Type"
        nodeId={id}
        fieldName="inputType"
        value={inputType}
        onChange={setInputType}
        options={[
          { value: 'Text', label: 'Text' },
          { value: 'File', label: 'File' },
        ]}
      />
    </BaseNode>
  );
};

