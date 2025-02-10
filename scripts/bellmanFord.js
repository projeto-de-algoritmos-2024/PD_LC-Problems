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
    });

    // Define a origem como o primeiro vértice
    const source = verticesList[0];
    distances[source] = 0;
    
    // Relaxa as arestas |V| - 1 vezes
    for (let i = 0; i < verticesList.length - 1; i++) {
        for (const edge of edges) {
            if (distances[edge.source] + edge.cost < distances[edge.destination]) {
                distances[edge.destination] = distances[edge.source] + edge.cost;
                predecessor[edge.destination] = edge.source;
            }
        }
    }
    
    // Verifica ciclos negativos
    for (const edge of edges) {
        if (distances[edge.source] + edge.cost < distances[edge.destination]) {
            return {
                error: "O grafo contém ciclos negativos"
            };
        }
    }
}