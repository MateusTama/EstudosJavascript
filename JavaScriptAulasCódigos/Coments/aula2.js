console.log('Oi' + 1)
console.log('1' + 1)//11
console.log('1'-1)//0
console.log(99 + 1)//100
console.log(99 + '1')//991 concatena
console.log('1'-1)//0
console.log(97.5)
console.log('7.5+1' , 7.5+1)//7.5+1 , 8.5

/*Bloco de variaveis*/

const num = 1%2 // const não muda o valor

if(num == 0)
{
    console.log("Esse número é par")
}

else

{
    console.log("Esse número é ímpar")
}

/*Bloco de conteúdo let*/

let icognita = 10
console.log(typeof icognita)
icognita = 'ola'
console.log(typeof icognita)

/*Concatenar*/

console.log(5 + 5 + '5' + 5)//1055
console.log('IFC é:'+1+9)//19 Juntando textos
console.log(1+9+' é IFC')//10
console.log(5 + 5 + '5' - 5)//100 = 105-5

/*Pessoa

const pessoa = I
{
    firstName = "Davi",
    lastName = "Davi2"
}

*/

/*Lista

const frutas =
['kiwi', 'morango', 'maça']

*/

/* tofixed(2) para limitar as casas após vírgula*/

/*Variaveis*/

let x = "100";
let y = "10";
let z = x / y;

console.log(`"100/10"`, z)

/*True e False*/

const num1 = 1.0
console.log(typeof num1)

const num2 = 1.1
console.log(typeof num2)

console.log(Number.isInteger(num1))//True
console.log(Number.isInteger(num2))//False