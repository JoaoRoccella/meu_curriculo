// DOM - Document Object Model - Modelo de Objeto do Documento
// Transforma tudo na página em objetos. Cada objeto recebe atributos (propriedades) e métodos (funções) associadas a ele.

// FUNÇÕES
// function nomeDaFuncao(parâmetros) {
//    corpo da função (o que ela vai fazer com os parâmetros e o que ela vai retornar para quem a chamou);
// }

// Saber o tema atual e obter o elemento do tema atual


// Saber onde está o atributo de tema

// Se o botão for clicado, então...
// addEventListener(evento, função)
document.querySelector('#botaoTrocaTema').addEventListener('click', () => {

    if (document.documentElement.getAttribute('data-tema') === 'light') {
        document.documentElement.setAttribute('data-tema', 'dark');
    } else {
        document.documentElement.setAttribute('data-tema', 'light');
    }
});
