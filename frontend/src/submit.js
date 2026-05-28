// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        if (nodes.length === 0) {
            alert('Cannot submit an empty pipeline. Please drag and connect some nodes first!');
            return;
        }

        try {
            const payload = {
                nodes: nodes.map((node) => ({
                    id: node.id,
                    type: node.type || node.data?.nodeType || '',
                })),
                edges: edges.map((edge) => ({
                    id: edge.id,
                    source: edge.source,
                    target: edge.target,
                })),
            };

            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Server returned error status ${response.status}`);
            }

            const result = await response.json();

            // Display a professional, user-friendly summary of the parsed pipeline
            alert(
                `🚀 Pipeline Successfully Submitted!\n\n` +
                `📊 Graph Details:\n` +
                `   • Total Nodes: ${result.num_nodes}\n` +
                `   • Total Edges: ${result.num_edges}\n\n` +
                `🔄 Topological Verification:\n` +
                `   • Directed Acyclic Graph (DAG): ${result.is_dag ? '🟢 YES (Valid)' : '🔴 NO (Contains cycles!)'}\n\n` +
                `${result.is_dag 
                    ? '🎉 Your pipeline flow has no circular loops and is fully ready to execute!' 
                    : '⚠️ Warning: A circular dependency exists. Please break loop cycles in your connections.'}`
            );

        } catch (error) {
            console.error('Submission failed:', error);
            alert(`❌ Pipeline submission failed:\n${error.message}\n\nPlease verify that your FastAPI backend is running locally at http://localhost:8000.`);
        }
    };

    return (
        <button type="button" onClick={handleSubmit} className="submit-btn">
            Submit Pipeline
        </button>
    );
};


