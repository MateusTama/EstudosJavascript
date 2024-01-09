let texto = "olá 'bonitão'";
let texto1 = `óla kskskskskksk
ksksksksksks "ksksks"`;

console.log(texto);
console.log(texto1);

let firstName = "Iago";
let lastName = "Haveroth";

/*Crase para colocar texto de tamanho maior*/ 

text = `Olá ${firstName}, ${lastName}`;
console.log(text);

/* DIVERSAS VARIÁVEIS (const, let) */ 

//CONST = Valor invariável

const price1 = 5;
const price2 = 6;

//price1 = 7

//LET = Valor variável

let x = 15; //Apenas 1 let
x = x + 10
x = 10;

//Escopo (classe)

{
    let x = 2
    console.log(x)
}

console.log(x)

/* Lista para vários valores (ARRAYS) */

const valores = [7.0,9.0]
console.log(valores[0], valores[1])
console.log(valores)

console.log(valores[2]) //indefinido

//valores = [8.0,10] // variavel const, erro
valores[1] = 10 //consegue alterar valor da posição
console.log("Novo valor: " + valores[1])

//Tamanho do Array

console.log("Tamanho do Array: " + valores.length)

/* Lista de sobrenome */

const lista = []
lista[0] = {id: 2536, nome:"Eduardo", sobrenome:"Kohler"}
lista[1] = {id: 2537, nome:"Bruno", sobrenome:"Piaz-chan"}

console.log("Lista: ", lista)