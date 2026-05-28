// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      handles={[
        { type: 'target', position: 'left', id: 'system' },
        { type: 'target', position: 'left', id: 'prompt' },
        { type: 'source', position: 'right', id: 'response' },
      ]}
    >
      <span className="base-node__description">This is a LLM.</span>
    </BaseNode>
  );
};
