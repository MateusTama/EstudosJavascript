/*
O switch é um operador condicional que verifica estritamente (===) se um valor e seu tipo
seu iguais. Caso sim, executa um bloco de código,
 ou dois blocos em sequência.
Caso o valor recebido não bata com nenhum caso, o bloco default será executado.
O código executa até o palavra break.
Se não tiver a palavra break, irá testar todos os cases
Obs.: se um valor satisfizer múltiplos casos, 
o primeiro será executado. Se tiver break, encerrará ali.
Senão, executará o próximo que satisfizer a condição.
Sintaxe:
switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }


*/
const exibirColocacao = function (posicao) {
    let saudacao = `Colocado(a) nr ${posicao}, `
    switch (posicao) {
        case 1:
            saudacao += ' medalha de ouro!'
            break;
        case 2:
            saudacao += ' medalha de prata!'
            break;
        case 3:
            saudacao += ' medalha de bronze!'
        default:
            saudacao += ' não conseguiu pódio!'
            break;
    }
    console.log(saudacao);
}
exibirColocacao(3)

/*
Obs.: é possível colocar multíplos cases, e um só bloco:
*/

const mensagemNoDiploma = function (mediaHistorico) {
    let texto = `Média total: ${mediaHistorico}. `
    //Math.floor: ex.: se 5.9, arredonda para 5
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_floor2    
    switch (Math.floor(mediaHistorico)) {
        case 10: case 9:
            texto += 'Excelente!'
            break;
        case 8: case 7:
            texto += 'Parabéns, mandou bem!'
            break;
        case 6:
            texto += 'Formado.'
            break;
        default:
            texto += 'Sem diploma.Usou muito a ChatGPT?'
    }
    console.log(texto);
}
mensagemNoDiploma(7.5)
//Outra maneira, mas que talvez seja melhor fazer com if/else:
const notaRandom = function () {
    console.log('Exemplo de SWITCH e faixas de valores:')
    let nota = Math.random() * 10
    switch (true) {
        case (nota < 6):
            console.log("Reprovadasso: ", nota);
            break;
        case (nota >= 6 && nota < 9):
            console.log("Aprovado!: ", nota);
            break;
        case (nota >= 9 && nota <= 10):
            console.log("Super Aprovado!: ", nota);
            break;
        default:
            console.log("Valor da nota fora do intervalo permitido: ", nota);
            break;
    }
}
notaRandom()
//Obs.:As comparações no SWITCH são estritas (===)
//Ou seja, precisa bater valor e tipo, senão não entra
//Veja o contra exemplo abaixo:
let x = "0";
switch (x) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}

//Exercícios:
/*1- Fazer um switch que receba um valor em string, e verifique
se for 1, diga que está acesso, se for zero, apagado.
2 - Coloque em uma variável um valor referente a um dia da semana 
(exemplo: 1, domingo, 2 segunda)
Agora, escreva mensagens personalizadas conforme cada dia.
Obs.: use uma função anônima em uma variável para implementar sua solução.
*/
const comemoraDia = function () {
    const dia = new Date().getDay()
    //0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.
    let texto = `Dia ${dia}, `
    switch (dia) {
        case 0:
            texto += 'Domingo, dia de ...'
            break;
        case 1:
            texto += 'segunda ...'
            break;
        case 3:
            texto += 'Quarta, dia de ...'
            break;
        default:
            break;
    }
    console.log(texto);
}
comemoraDia()