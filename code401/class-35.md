# What I Learnt Today

## Graphs
    collection of node that are related to each other by edges

### Components of a graph

- Vertex (node)
- Edges
- Neighbor
- Degree

### Terminology
- Vertex, also called a “node”, is a data object that can have zero or more adjacent vertices.

- Edge - connection between two nodes.

- Neighbors - adjacent nodes

- Degree - number of edges connected to that vertex.

## Types of graphs :
### Directions:
- Undirected: the edges are bi-directional
- Directed (Digraph): edges are directed
### Connectivity:
- Complete: all nodes are connected to all other nodes
- Connected: all of nodes have at least one edge i.e trees
- Disconnected: some nodes have no edge
### Cycles:
- Acyclic: directed without cycles (the node cannot return to itself)
- Cyclic: the node can return to itself
### Graph Representation
- An Adjacency matrix is represented through a 2-dimensional array. If there are n vertices, then we are looking at an n x n Boolean matrix
- An adjacency list is the most common way to represent graphs.
### Weighted Graphs
- A weighted graph is a graph with numbers assigned to its edges.
### Traversals
- Breadth First
- Depth First