/*
Operadores Lógicos:
A partir do momento que ele percebe que satisfez ou não a comparação, já entra ou sai.
*/
const [numero1,numero2,numero3,numero4] = [4,5,8,7]
/*
Abaixo, se a primeira condição for true ele testa a segunda. 
Agora, se a primeira der false, já para de executar o código (operador and precisa satisfazer as duas).
*/
console.log((numero1<numero2)&&
(numero3>numero4));
//Agora, com ||, basta uma dar true para entrar, e parar de testar a condição
console.log((numero1>numero2) ||
(numero3>numero4));


//Não passar o operador abaixo (inútil)
//Nullish Coalescing Operator (??):
//https://www.w3schools.com/js/js_comparisons.asp
let nome = null;
let textoPadrao = "Não informado";
let nomeTratado = nome ?? textoPadrao;
console.log('nomeTratado com nulish (null ou undefined) ?? ',nomeTratado);

//verificar o operador abaixo, pois não houve diferença se não usá-lo (imprime undefined de qq jeito)
//Optional Chaining Operator ?.
const car = {type:"Fiat", model:"500", color:"white"};
console.log('car?.fabricante',car?.fabricante);

