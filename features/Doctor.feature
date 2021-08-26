# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo racionar meus mantimentos
    E curar os viajantes
    Para que eu possa seguir a viagem saudável
    E deixar meus companheiros de viagem saudáveis.

    Contexto:
        Dado um Doctor de nome 'Yoh'
        E o Doctor sempre começa a viagem com 1 refeição
        E o Doctor sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeiçoes
        Quando o Doctor sair para caçar 1 vezes
        Então a quantidade de refeições do Doctor deve ser igual a 3

    Cenário: Comeu e seguiu saudável
        Quando o Doctor parar para comer 1 vezes
        Então a quantidade de refeições do Doctor deve ser igual a 0
        E o Doctor não ficará doente

    Cenário: Comeu e ficou doente
        Quando o Doctor parar para comer 2 vezes
        Então a quantidade de refeições do Doctor deve ser igual a 0
        E o Doctor ficará doente

    Cenário: O Doctor curando alguém
        Quando um viajante estiver doente
        E e o Doctor o curar
        Então o viajante não estará doente