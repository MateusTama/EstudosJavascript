/*com var, o escopo de bloco não é respeitado.
*Ou seja, mesmo em um aninhamento de vários if-else,
as variáveis var locais se comportam como globais:*/


{
    {
        {
            //var testando ='1,2,3.'  
            let testando ='1,2,3.'
        }
    }
}
//console.log(testando);

/*
Isso ocorre porque uma var pode ter um de dois escopos:
1-Global: toda var criada sem estar em uma função 
pode ser acessada por qualquer local do código. Inclusive,
ela pode ser acessada pelo objeto Window (ex.: Window.var), 
que siginifica que ela pode ser acessada por qualquer janela dentro 
daquela aplicação web (via browser).
Aqui no node, ela pertence a cada módulo (node) criado no servidor,
que pode conter vários arquivos JS.
2- Function: se a var é criada dentro de uma function, ela só pode ser acessada lá.
*/

function testandoEscopoVar()
{
    var dentroFuncao=`Exceção: 
    Uma var dentro de uma função não pode ser acessada 
    de fora.`
}
//console.log(dentroFuncao);//is not defined
/**
 * var também permite declarar uma mesma variável duas 
 * vezes dentro de um mesmo escopo.
 *
 * */ 
var a = 2
var a = 3
//por estes motivos, 
//recomenda-se usar let (para variáveis) 
//ou const (para constantes)
let b=2
b=2 //erro: Não é possível declarar novamente a variável de escopo de bloco 
//const c // err: declarações constantes devem sempre ser inicializadas, até porque de pois, não seria possível atualizar o valor
const c = 1500//depois não é possível alterar este valor. Exemplo: PI, descontos de taxas, etc
//const c = 1800 //TypeError: Assignment to constant variable.
/*

Exercício:
o que acontecerá abaixo?
1)Erro, pois é proibido declarar uma mesma variável duas vezes?
2) Imprimirá Joana?
3)Imprimirá Não informado?
*/
var nome='Não informado'
{
    var nome = 'Joana'
}
console.log('O valor de var é: ',nome);

let nome2='Não informado'
{
     nome2 = 'Jhon Snow'
}
console.log('O valor (LET) é: ',nome2);

var nome3 ='Chun Li' 
var nome3='Não informado'//ao executar, dará erro: Identifier 'nome3' 
//has already been declared
/*o let dá uma 'organizada' na casa, não permitindo criar uma variável já declarada.
Curiosidade, se declarar uma mesma variável primeiro com let, depois com var,
ele nem deixa executar o código. Do contrário, executa mas dá erro.
*/

{
    let nome3 = 'Sagat'
}
console.log('O valor de nome3 é: ',nome3);
