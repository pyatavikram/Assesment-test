from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Enable CORS for React dev server on port 3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str
    type: str

class Edge(BaseModel):
    id: str
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

def is_directed_acyclic_graph(nodes: List[str], edges: List[Edge]) -> bool:
    # 1. Build adjacency list representation of the graph
    adj = {node: [] for node in nodes}
    for edge in edges:
        if edge.source not in adj:
            adj[edge.source] = []
        if edge.target not in adj:
            adj[edge.target] = []
        adj[edge.source].append(edge.target)

    # 2. Visited states map:
    # 0 = Unvisited, 1 = Visiting (in recursion stack), 2 = Visited (completed)
    visited = {node: 0 for node in adj.keys()}

    def has_cycle(u: str) -> bool:
        visited[u] = 1  # Mark as visiting
        for v in adj.get(u, []):
            if visited.get(v, 0) == 1:
                return True  # Back-edge found: cycle exists!
            if visited.get(v, 0) == 0:
                if has_cycle(v):
                    return True
        visited[u] = 2  # Mark as fully processed
        return False

    # 3. Perform DFS for all unvisited nodes
    for node in list(adj.keys()):
        if visited.get(node, 0) == 0:
            if has_cycle(node):
                return False  # Contains a cycle, not a DAG

    return True  # No cycles, it is a valid DAG

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    node_ids = [node.id for node in pipeline.nodes]
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    
    is_dag = is_directed_acyclic_graph(node_ids, pipeline.edges)
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }

