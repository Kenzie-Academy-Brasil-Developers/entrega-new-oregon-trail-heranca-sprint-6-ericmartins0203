# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo racionar meus mantimentos
    E caçar para arrumar comida
    Para que eu possa seguir a viagem saudável
    E deixar meus companheiros de viagem saudáveis.

    Contexto:
        Dado um Hunter de nome "Eric"
        E o Hunter sempre começa a viagem com 2 refeição
        E o Hunter sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 7

    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 0
        E o Hunter não ficará doente

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 0
        E o Hunter ficará doente

    Cenário: Saiu para caçar e deu comida para um companheiro
        Quando o Hunter sair para caçar 1 vezes
        E o Hunter der 3 refeições para um companheiro
        Então a quantidade de refeições do Hunter deve ser igual a 4
