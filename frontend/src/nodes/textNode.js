// textNode.js

import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './BaseNode';
import { TextAreaField } from './fields';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const updateNodeField = useStore((state) => state.updateNodeField);
  const updateNodeInternals = useUpdateNodeInternals();
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState(48);

  const extractVariables = (text) => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const vars = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      const varName = match[1];
      if (!vars.includes(varName)) {
        vars.push(varName);
      }
    }
    return vars;
  };

  const variables = extractVariables(currText);

  useEffect(() => {
    updateNodeField(id, 'text', currText);
  }, [id, currText, updateNodeField]);

  useEffect(() => {
    updateNodeInternals(id);
  }, [id, variables.length, updateNodeInternals]);

  // Auto-resize height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollH = textareaRef.current.scrollHeight;
      setTextareaHeight(Math.max(48, Math.min(250, scrollH)));
    }
  }, [currText]);

  // Auto-resize width
  const lines = currText.split('\n');
  const longestLine = lines.reduce((max, line) => Math.max(max, line.length), 0);
  const dynamicWidth = Math.max(190, Math.min(450, 140 + longestLine * 6.5));
  const dynamicHeight = 76 + textareaHeight;

  return (
    <BaseNode
      id={id}
      title="Text"
      className="node--text"
      handles={[]}
      style={{ width: `${dynamicWidth}px`, minHeight: `${dynamicHeight}px` }}
    >
      <TextAreaField
        label="Text"
        nodeId={id}
        fieldName="text"
        value={currText}
        onChange={setCurrText}
        inputRef={textareaRef}
        style={{ height: `${textareaHeight}px`, resize: 'none', overflowY: 'hidden' }}
      />

      {/* Output handle — always present */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ top: '50%' }}
      />

      {/* Dynamic variable handles — rendered directly so React Flow sees them */}
      {variables.map((varName, i) => (
        <Handle
          key={varName}
          type="target"
          position={Position.Left}
          id={`${id}-${varName}`}
          style={{
            top: variables.length === 1
              ? '50%'
              : `${((i + 1) / (variables.length + 1)) * 100}%`,
          }}
        />
      ))}
    </BaseNode>
  );
};