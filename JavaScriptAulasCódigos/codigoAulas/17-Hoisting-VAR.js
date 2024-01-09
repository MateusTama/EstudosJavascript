/*
A JS faz um hoisting (lançamento para cima, elevar) das variáveis do código 
(SE DECLARADAS COM A PALAVRA CHAVE VAR).
Ou seja, como o interpretador lê o código de cima para baixo (e da esquerda para a direita),
esta elevação das declarações das variáveis
 permite ao programador chamar
uma variável que será criada futuramente ainda.
Isso ocorre, porque ao interpretar o código, 
a declaração de todas as variáveis
são elevadas para a primeira etapa de interpretação/compilação.
Repare que a linha abaixo não gera erro, 
mesmo com a variável a
inexistente naquele momento.
*/
 
console.log('acessando uma var antes de declarar :',a); //gera undefined
var a = 'Aula de JS'//agora comente esta linha e veja a diferença.
//a=10//declaração oculta não gera hoisting
console.log(a);
/*
No exemplo acima, comentarmos a declaração de var, 
ou mesmo se apenas tirarmos
a palavra chave var, gerará um erro no programa,
pois cada variável precisa ser declarada.
ReferenceError: a is not defined
    at Object.<anonymous>
No entanto, isto demonstra também que se utilizarmos 
declaração oculta de variável, não haverá
a elevação (hoisting). 
*/ 
//console.log(d);
//let d='Com let, funciona?'
//Acima, gera uma mensagem mais esperada para 
//programadores(as) de outras linguagens:
//ReferenceError: Cannot access 'd' before initialization
//e abaixo?
console.log(c);
const c = ["Mamão","Manga","Morango"]

//Obs.: variáveis declaradas com let e const 
//também sofrem hoinsting, 
//mas ficam aguardando sua declaração para poderem ser utilizadas.
//Referência: https://www.w3schools.com/js/js_hoisting.asp
//Na prática, gera erro se forem usadas sem declaração.

//var em funções também são elevadas.
//Isso ocorre dentro de funções também:

function testeElevacao()
{
    console.log('b :', b);
    var b='teste dentro de uma function'
    console.log('b :', b);
}
testeElevacao()

console.log('categoria',categoria);
var categoria ='filmes'
console.log('categoria',categoria);
function testeEscopoEElevacao()
{
    var categoria = 'series'
    console.log('categoria dentro da function',categoria);
}
testeEscopoEElevacao()
console.log('categoria fora da function',categoria);

