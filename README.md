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

Seleção de horários em Agendamento de Intervalos:

![AIQ](/assets/AIQ.png)

Melhor Intervalo encontrado:

![AIR](/assets/AIR.png)

Seleção de cargas em Otimização de Carga (Knapsack):

![CCQ](/assets/CCQ.png)

Melhor otimização de carga encontrado:

![CCR](/assets/CCR.png)

Seleção de rotas:

![ORQ](/assets/ORQ.png)

Melhor rota encontrada:

![ORR](/assets/ORR.png)

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

### Vídeo de Apresentação do Projeto

Contempla-se para o projeto, um vídeo que faz a apresentação do projeto TransportDP explicando os algoritmos usados e a interface desenvolvida:

[Apresentação | TransportDP](https://youtu.be/wtTFCiJI0b0)
