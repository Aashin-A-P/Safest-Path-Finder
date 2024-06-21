class PriorityQueue {
    constructor() {
        this.nodes = [];
    }

    enqueue(node, priority) {
        this.nodes.push({ node, priority });
        this.sort();
    }

    dequeue() {
        return this.nodes.shift().node;
    }

    sort() {
        this.nodes.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return !this.nodes.length;
    }
}

function calculateHeuristic(current, goal) {
    // You can use different heuristics, like Euclidean distance or Manhattan distance
    return Math.sqrt(Math.pow(current.lat - goal.lat, 2) + Math.pow(current.lng - goal.lng, 2));
}

function aStar(graph, start, goal) {
    const openSet = new PriorityQueue();
    const cameFrom = {};
    const gScore = {};
    const fScore = {};

    openSet.enqueue(start, 0);
    gScore[start] = 0;
    fScore[start] = calculateHeuristic(start.latlng, goal.latlng);

    while (!openSet.isEmpty()) {
        const current = openSet.dequeue();

        if (current === goal) {
            return reconstructPath(cameFrom, goal);
        }

        for (const neighbor of graph[current]) {
            const tentativeGScore = gScore[current] + neighbor.weight;
            
            if (!gScore[neighbor.node] || tentativeGScore < gScore[neighbor.node]) {
                cameFrom[neighbor.node] = current;
                gScore[neighbor.node] = tentativeGScore;
                fScore[neighbor.node] = gScore[neighbor.node] + calculateHeuristic(neighbor.node.latlng, goal.latlng);
                
                if (!openSet.nodes.some(node => node.node === neighbor.node)) {
                    openSet.enqueue(neighbor.node, fScore[neighbor.node]);
                }
            }
        }
    }

    return null; // No path found
}

function reconstructPath(cameFrom, current) {
    const path = [current];

    while (cameFrom[current]) {
        current = cameFrom[current];
        path.unshift(current);
    }

    return path;
}

// Example usage:
const graph = {};

// Populate the graph with neighbors and weights
for (const marker of markers) {
    const neighbors = [];

    for (const path of paths) {
        if (path[0] === marker.name) {
            const neighbor = { node: path[1], weight: safetyScores[marker.name][path[1]] };
            neighbors.push(neighbor);
        } else if (path[1] === marker.name) {
            const neighbor = { node: path[0], weight: safetyScores[marker.name][path[0]] };
            neighbors.push(neighbor);
        }
    }

    graph[marker.name] = neighbors;
}

const startMarker = markers[0]; // Replace with the actual start marker
const goalMarker = markers[markers.length - 1]; // Replace with the actual goal marker

const path = aStar(graph, startMarker.name, goalMarker.name);

console.log("Path:", path);
