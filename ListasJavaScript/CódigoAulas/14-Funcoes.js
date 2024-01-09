/**Funções são essenciais em JS.
 * Praticamente, tudo é uma função:
 */
console.log(typeof Object);
class Produto {}
console.log(typeof Produto);
/**Funções podem ter retorno ou não, receber parâmetros ou não.
 * Elas executam sentença, organizadas em blocos
 * de códigos.
 */
function exibirSoma(x,y)
{
    console.log(x+y);
}
//é necessário chamar a função:
exibirSoma()//imprimir NaN
exibirSoma(5)//imprimir NaN
exibirSoma(5,6)//imprimir o resultado
/**No caso abaixo, é possível definir zero 
 * como o valor default (padrão de início).
 * Ou seja, se nada for passado, as variáveis iniciam em zero.
*/

function exibirSomarComDefault(x=0,y=0)
{
    console.log(x+y);
}
exibirSomarComDefault(5)
//é possível também definir retornos para funções:
function somar(x=0,y=0)
{
    return x+y
}
console.log(typeof somar);
console.log(somar(20,5)) //executa a função
console.log(somar.toString());//imprime o código da função

/**
 * É possível também armazenar um função em uma variável.
 * No caso abaixo, foi armazenada um função anônima:
 * */
const imprimirSubtracao = function (a,b)
{
    console.log(a - b)
}
imprimirSubtracao(5,2)
/**É possível também reduzir o tamanho da escrita de um função, 
 * por meio de uma arrow function:
 */
const subtracao = (a,b) =>
{
    return a-b
}
console.log('Arrow Function subtração',subtracao(7,8));

/**Encurtando ainda mais: quando uma função tem
 * apenas uma linha de comando, é possível
 * escrevê-la assim:
*/
const multiplicacao = (x,y) => x*y
console.log(multiplicacao(3,4));

//quando uma função tem apenas um parâmetro, pode ser encurtada assim:
const saudacao = texto => console.log(texto);
saudacao('Por hoje é só pessoal')
//opcional (não passar ainda):
const maioridade2 = idade => console.log(idade>=18?'Pode dirigir':'Espere pela maioridade');
maioridade2(19)