// Estruturas de dados globais
let intervals = [];
let items = [];
let routes = [];

// Funções de manipulação da interface

function addInterval() {
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const weight = parseFloat(document.getElementById('interval-weight').value);

    if (!startTime || !endTime || isNaN(weight)) {
        alert('Por favor, preencha todos os campos do intervalo');
        return;
    }

    intervals.push({
        start: new Date(`2024-01-01T${startTime}`).getTime(),
        end: new Date(`2024-01-01T${endTime}`).getTime(),
        weight: weight
    });

    updateIntervalsList();
}

function addItem() {
    const weight = parseFloat(document.getElementById('item-weight').value);
    const value = parseFloat(document.getElementById('item-value').value);

    if (isNaN(weight) || isNaN(value)) {
        alert('Por favor, preencha o peso e valor do item');
        return;
    }

    items.push({ weight, value });
    updateItemsList();
}

function addRoute() {
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const cost = parseFloat(document.getElementById('cost').value);

    if (!source || !destination || isNaN(cost)) {
        alert('Por favor, preencha todos os campos da rota');
        return;
    }

    routes.push({ source, destination, cost });
    updateRoutesList();
}

function updateIntervalsList() {
    const list = document.getElementById('intervals-list');
    list.innerHTML = intervals.map((interval, index) => `
        <div>
            Intervalo ${index + 1}: 
            ${new Date(interval.start).toLocaleTimeString()} - 
            ${new Date(interval.end).toLocaleTimeString()} 
            (Peso: ${interval.weight})
        </div>
    `).join('');
}

function updateItemsList() {
    const list = document.getElementById('items-list');
    list.innerHTML = items.map((item, index) => `
        <div>
            Item ${index + 1}: Peso = ${item.weight}, Valor = ${item.value}
        </div>
    `).join('');
}

function updateRoutesList() {
    const list = document.getElementById('routes-list');
    list.innerHTML = routes.map((route, index) => `
        <div>
            Rota ${index + 1}: ${route.source} → ${route.destination} (Custo: ${route.cost})
        </div>
    `).join('');
}

function displayResults(results) {
    const resultsDiv = document.getElementById('optimization-results');
    resultsDiv.innerHTML = `
        <div class="results-content">
            <h4>Resultados da Otimização:</h4>
            <pre>${JSON.stringify(results, null, 2)}</pre>
        </div>
    `;
}

// Funções de integração com os algoritmos
function calculateOptimalSchedule() {
    if (intervals.length === 0) {
        alert('Adicione alguns intervalos primeiro');
        return;
    }
    const result = weightedIntervalScheduling(intervals);
    displayResults({
        type: 'Agendamento de Intervalos',
        selectedIntervals: result
    });
}

function calculateOptimalLoad() {
    const capacity = parseFloat(document.getElementById('truck-capacity').value);
    if (isNaN(capacity) || items.length === 0) {
        alert('Defina a capacidade do caminhão e adicione alguns itens');
        return;
    }
    const result = knapsack(items, capacity);
    displayResults({
        type: 'Otimização de Carga',
        selectedItems: result
    });
}

function findOptimalRoute() {
    if (routes.length === 0) {
        alert('Adicione algumas rotas primeiro');
        return;
    }
    const result = bellmanFord(routes);
    displayResults({
        type: 'Otimização de Rota',
        shortestPaths: result
    });
}


