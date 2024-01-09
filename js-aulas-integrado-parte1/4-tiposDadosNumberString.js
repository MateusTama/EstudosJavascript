/* Javascript  utiliza o + para somar e concatenar.
Números são somados, strings concatenadas.
Mas e quando são misturados? */
let x = "100";
let y = "10";
let z = x / y;
//JS tenta concervter strings em números para realizar operações
console.log(`""100/10""`, z)
//Erro comum, esperar um 30:
x = 10;
y = 20;
z = "O resultado é: "+x+y;
console.log(z)
//Outro erro comum é esperar abaixo a saída 102030
x = 10;
y = 20;
z = "30";
console.log(x+y+z)
/*
o interpretador JS começa da esquerda para a direita.
Portanto, no exemplo acima, primeiramente ele soma 10 e 20, 
depois, concatena com "30".

Falando mais sobre Numeric Strings: em todas as operações numéricas,
a JS tenta converter o texto em número, para realizar a operação:
*/
x = "100";
y = "10";
z = x / y;
console.log(z);
/* Isto irá funcionar com divisão, multilpicação, subtrações, mas não com somas,
pois ele irá concatenar os textos.
*/
x = "100";
y = "10";
z = x + y;
console.log(z);
