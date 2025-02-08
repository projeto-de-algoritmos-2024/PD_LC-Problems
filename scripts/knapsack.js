function knapsack(items, capacity) {
    const n = items.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    const selected = Array(n + 1).fill().map(() => Array(capacity + 1).fill(false));
    
    // Preenche a tabela dp
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (items[i-1].weight <= w) {
                const includeValue = items[i-1].value + dp[i-1][w - items[i-1].weight];
                const excludeValue = dp[i-1][w];
                
                if (includeValue > excludeValue) {
                    dp[i][w] = includeValue;
                    selected[i][w] = true;
                } else {
                    dp[i][w] = excludeValue;
                    selected[i][w] = false;
                }
            } else {
                dp[i][w] = dp[i-1][w];
                selected[i][w] = false;
            }
        }
    }
    
    // Reconstrói a solução
    const result = {
        selectedItems: [],
        totalValue: dp[n][capacity],
        totalWeight: 0
    };
    
    let w = capacity;
    for (let i = n; i > 0; i--) {
        if (selected[i][w]) {
            result.selectedItems.push({
                index: i-1,
                weight: items[i-1].weight,
                value: items[i-1].value
            });
            result.totalWeight += items[i-1].weight;
            w -= items[i-1].weight;
        }
    }
    
    return result;
}
