function bellmanFord(edges) {
    // Encontra todos os vértices únicos
    const vertices = new Set();
    edges.forEach(edge => {
        vertices.add(edge.source);
        vertices.add(edge.destination);
    });
    const verticesList = Array.from(vertices);
    
    // Inicializa as distâncias
    const distances = {};
    const predecessor = {};
    verticesList.forEach(vertex => {
        distances[vertex] = Infinity;
        predecessor[vertex] = null;
    })
}