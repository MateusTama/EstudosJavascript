/*Existem 4 jeitos de criar variáveis com JS
var, let, const , ou não colocar nada.
Browsers de 2015 em diante conseguem interpretar let e const.
Para computadores mais antigos que isto, utiliza-se o var ou nada.

Regra: uma const não pode ter seu valor alterado.
*/
const price1 = 5;
const price2 = 6;
//isso dará erro:
//price1 = 7;
/* Também é obrigatório atribuir o valor a uma const sempre que a criar.
*/
//Isso dará erro:
//const pi;
//pi = 3.14159265359;
//Consts são muito utilizadas ao criar arrays, objetos, funções e expressões regulares ...

/*
Já variáveis let podem ter seu valor
 alterado (são realmente variáveis).
No entanto, não podem ser recriadas, 
nem acessadas fora do seu escopo 
de criação (var podem).
Veja, isso dará erro de escopo:
*/

let x=15;
x =x +10
{
    let x = 2;
}
console.log(x)
//Outro exemplo:
x = 10;
//Aqui x é 10

{
    x = 2;
// Aqui x é 2
}

console.log(x)

// Aqui x é 10
/*
Fazendo o mesmo código acima,
 mas com var, ao sair do escopo, x será 2
*/
