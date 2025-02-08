# TransportDP

**Número da Lista**: 23<br>
**Conteúdo da Disciplina**: PD<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 211030943  |  Artur Jackson Leal Fontinele |
| 211030774  |  Gustavo França Boa Sorte |

## Sobre 
O TransportDP é uma aplicação web que utiliza algoritmos de Programação Dinâmica para otimizar operações logísticas de transporte. O sistema integra três algoritmos clássicos de PD para resolver diferentes aspectos do problema de logística:

## Screenshots
Adicione 3 ou mais screenshots do projeto em funcionamento.

## Instalação 
**Linguagens**: HTML, CSS, JavaScript<br>
**Framework**: Nenhum <br>

### Pré-requisitos
- Navegador web (Chrome, Firefox, Safari ou Edge)

### Instalação
1. Clone o repositório
2. Abra o arquivo `index.html` em seu navegador

## Uso 

### 1. Agendamento de Intervalos (Weighted Interval Scheduling)
- **Objetivo**: Otimizar as janelas de tempo para entregas
- **Como usar**:
  1. Insira o horário de início e fim do intervalo
  2. Adicione o peso/valor do intervalo
  3. Repita para todos os intervalos desejados
  4. Clique em "Calcular Melhor Agenda"
- **Exemplo**: 
  - Intervalo 1: 08:00 - 10:00, Peso 100
  - Intervalo 2: 09:30 - 11:00, Peso 120
  - Intervalo 3: 11:00 - 12:00, Peso 80

### 2. Otimização de Carga (Knapsack)
- **Objetivo**: Maximizar o valor da carga respeitando a capacidade do caminhão
- **Como usar**:
  1. Defina a capacidade do caminhão
  2. Adicione itens com seus respectivos pesos e valores
  3. Clique em "Calcular Carga Ótima"
- **Exemplo**:
  - Capacidade do caminhão: 1000kg
  - Item 1: 200kg, R$ 500
  - Item 2: 300kg, R$ 600
  - Item 3: 400kg, R$ 800

### 3. Otimização de Rota (Bellman-Ford)
- **Objetivo**: Encontrar o caminho mais curto entre pontos de entrega
- **Como usar**:
  1. Adicione rotas com origem, destino e custo
  2. Clique em "Encontrar Melhor Rota"
- **Exemplo**:
  - Rota 1: A → B, Custo 100
  - Rota 2: B → C, Custo -20
  - Rota 3: A → C, Custo 90


## Algoritmos Implementados

### 1. Weighted Interval Scheduling
- **Problema**: Selecionar o conjunto de intervalos não sobrepostos com maior valor total
- **Aplicação no projeto**: Otimização de janelas de tempo para entregas
- **Complexidade**: O(n log n)

### 2. Knapsack (Problema da Mochila)
- **Problema**: Selecionar itens com diferentes pesos e valores para maximizar o valor total sem exceder a capacidade
- **Aplicação no projeto**: Otimização da carga dos caminhões
- **Complexidade**: O(nW), onde n é o número de itens e W é a capacidade

### 3. Bellman-Ford
- **Problema**: Encontrar o caminho mais curto em um grafo com pesos negativos
- **Aplicação no projeto**: Otimização de rotas de entrega
- **Complexidade**: O(VE), onde V é o número de vértices e E é o número de arestas