function weightedIntervalScheduling(intervals) {
    // Ordena os intervalos pelo tempo de término
    intervals.sort((a, b) => a.end - b.end);
    
    const n = intervals.length;
    const dp = new Array(n).fill(0);
    const selected = new Array(n).fill(false);
    
    // Caso base
    dp[0] = intervals[0].weight;
    
    // Preenche a tabela dp
    for (let i = 1; i < n; i++) {
        // Encontra o último intervalo não conflitante
        let lastNonConflict = -1;
        for (let j = i - 1; j >= 0; j--) {
            if (intervals[j].end <= intervals[i].start) {
                lastNonConflict = j;
                break;
            }
        }
        
        // Valor incluindo o intervalo atual
        let includeValue = intervals[i].weight;
        if (lastNonConflict !== -1) {
            includeValue += dp[lastNonConflict];
        }
        
        // Valor excluindo o intervalo atual
        const excludeValue = dp[i - 1];
        
        // Escolhe o maior valor
        dp[i] = Math.max(includeValue, excludeValue);
    }
    
    // Reconstrói a solução
    let i = n - 1;
    const result = [];
    
    while (i >= 0) {
        let lastNonConflict = -1;
        for (let j = i - 1; j >= 0; j--) {
            if (intervals[j].end <= intervals[i].start) {
                lastNonConflict = j;
                break;
            }
        }
        
        let includeValue = intervals[i].weight;
        if (lastNonConflict !== -1) {
            includeValue += dp[lastNonConflict];
        }
        
        if (i === 0 || includeValue > dp[i - 1]) {
            result.push({
                start: new Date(intervals[i].start).toLocaleTimeString(),
                end: new Date(intervals[i].end).toLocaleTimeString(),
                weight: intervals[i].weight
            });
            i = lastNonConflict;
        } else {
            i--;
        }
    }
    
    return result.reverse();
}
