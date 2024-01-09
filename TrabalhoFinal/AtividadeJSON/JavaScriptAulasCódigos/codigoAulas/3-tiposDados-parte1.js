//fonte: https://www.w3schools.com/js/js_datatypes.asp
// Numbers:
let polegadas = 16;
let frequência = 7.5;

// Strings:
let cor = "Amarela";
let sobreNome = "Silveira";

// Booleans
let x = true;
let y = false;

// Object:
const person = 
{
    firstName:"Joana",
    lastName:"Dark"
};

// Array object:
const fruits = 
["Manga", "Morango", "Kiwi"];

// Date object:
const date = new Date("2022-03-25");
/*Cuidado com strings e números.
*/
console.log('Será que soma 99 e 1?','99'+1)//com strings, o + concatena sempre. O - não
console.log('Será que subtrai 99 e 1?','99'-1)//com strings, o + concatena sempre. O - não
/*
Dentro do parênteses, da esquerda para a direita, 
quando aparece uma String, o interpretador trata tudo como string, 
e se tiver o +, vai concatenar e não somar.
*/
console.log(5 + 5 + "5" + 5)//1055
console.log('IFC é:'+1+9)//19
console.log(1+9+', é IFC!')//10
