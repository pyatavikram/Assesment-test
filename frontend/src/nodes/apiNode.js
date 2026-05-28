// apiNode.js
// Makes HTTP API calls — demonstrates multiple field types (text + dropdown).

import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { TextField, SelectField } from './fields';
import { useStore } from '../store';

export const ApiNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com');
  const [method, setMethod] = useState(data?.method || 'GET');
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    updateNodeField(id, 'url', url);
    updateNodeField(id, 'method', method);
  }, [id, updateNodeField]);

  return (
    <BaseNode
      id={id}
      title="API"
      handles={[
        { type: 'target', position: 'left', id: 'body' },
        { type: 'source', position: 'right', id: 'response' },
      ]}
    >
      <TextField
        label="URL"
        nodeId={id}
        fieldName="url"
        value={url}
        onChange={setUrl}
      />
      <SelectField
        label="Method"
        nodeId={id}
        fieldName="method"
        value={method}
        onChange={setMethod}
        options={[
          { value: 'GET', label: 'GET' },
          { value: 'POST', label: 'POST' },
          { value: 'PUT', label: 'PUT' },
          { value: 'DELETE', label: 'DELETE' },
        ]}
      />
    </BaseNode>
  );
};

