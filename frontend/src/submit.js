// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        if (nodes.length === 0) {
            alert('Please drag and connect some nodes first.');
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
                throw new Error(`Server error: ${response.status}`);
            }

            const result = await response.json();

            alert(
                `Pipeline Parse Results:\n` +
                `Nodes: ${result.num_nodes}\n` +
                `Edges: ${result.num_edges}\n` +
                `Is DAG: ${result.is_dag ? 'Yes (Valid)' : 'No (Contains cycles)'}`
            );

        } catch (error) {
            console.error('Submission failed:', error);
            alert(`Pipeline submission failed: ${error.message}\n\nPlease check if backend is running on http://localhost:8000.`);
        }
    };

    return (
        <button type="button" onClick={handleSubmit} className="submit-btn">
            Submit Pipeline
        </button>
    );
};


