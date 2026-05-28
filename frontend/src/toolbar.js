// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <aside className="toolbox-sidebar">
            <h2 className="toolbox-title">Toolbox</h2>
            
            <div className="toolbox-category">
                <div className="toolbox-category__title">Core Nodes</div>
                <div className="toolbox-grid">
                    <DraggableNode type='customInput' label='Input' />
                    <DraggableNode type='customOutput' label='Output' />
                    <DraggableNode type='llm' label='LLM' />
                    <DraggableNode type='text' label='Text' />
                </div>
            </div>

            <div className="toolbox-category">
                <div className="toolbox-category__title">Advanced</div>
                <div className="toolbox-grid">
                    <DraggableNode type='api' label='API' />
                    <DraggableNode type='note' label='Note' />
                </div>
            </div>

            <div className="toolbox-category">
                <div className="toolbox-category__title">Logic & Control</div>
                <div className="toolbox-grid">
                    <DraggableNode type='condition' label='Condition' />
                    <DraggableNode type='timer' label='Timer' />
                    <DraggableNode type='merge' label='Merge' />
                </div>
            </div>
        </aside>
    );
};

