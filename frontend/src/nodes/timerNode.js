// timerNode.js
// Delays pipeline execution — demonstrates number input + unit selection.

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { TextField, SelectField } from './fields';

export const TimerNode = ({ id, data }) => {
  const [duration, setDuration] = useState(data?.duration || '1000');
  const [unit, setUnit] = useState(data?.unit || 'ms');

  return (
    <BaseNode
      id={id}
      title="Timer"
      handles={[
        { type: 'target', position: 'left', id: 'trigger' },
        { type: 'source', position: 'right', id: 'done' },
      ]}
    >
      <TextField label="Duration" type="number" value={duration} onChange={setDuration} />
      <SelectField
        label="Unit"
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
