// timerNode.js
// Delays pipeline execution — demonstrates number input + unit selection.

import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { TextField, SelectField } from './fields';
import { useStore } from '../store';

export const TimerNode = ({ id, data }) => {
  const [duration, setDuration] = useState(data?.duration || '1000');
  const [unit, setUnit] = useState(data?.unit || 'ms');
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    updateNodeField(id, 'duration', duration);
    updateNodeField(id, 'unit', unit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <BaseNode
      id={id}
      title="Timer"
      handles={[
        { type: 'target', position: 'left', id: 'trigger' },
        { type: 'source', position: 'right', id: 'done' },
      ]}
    >
      <TextField
        label="Duration"
        type="number"
        nodeId={id}
        fieldName="duration"
        value={duration}
        onChange={setDuration}
      />
      <SelectField
        label="Unit"
        nodeId={id}
        fieldName="unit"
        value={unit}
        onChange={setUnit}
        options={[
          { value: 'ms', label: 'Milliseconds' },
          { value: 's', label: 'Seconds' },
          { value: 'min', label: 'Minutes' },
        ]}
      />
    </BaseNode>
  );
};

