//Operador Ternário:
//variablename = (condition) ? value1:value2 
//https://www.w3schools.com/js/js_comparisons.asp
let age = 19
let voteable = (age < 18) ? "Too young":"Old enough";
//com arrow function:
//ex.:hello = val => "Hello " + val;
const resultado = nota => nota>=7?'Aprovado':'Reprovado'
console.log(resultado(6));
//teste
//cuidado ao trabalhar com variáveis locais e arrowfunction
//no caso abaixo. perce precisa receber percentagem.
//Pois, se passar percentagem diretamente para a arrowfunction,
// a JS se confunde e perga um valor undefined
let percentagem = 80
const liberadoTCC = (perce=percentagem) => perce>=75?'liberado':'precisa atingir 75% da grade'
//console.log(liberadoTCC.toString());
console.log(percentagem,' - ',liberadoTCC());
console.log(0.8>=0.75);
console.log(percentagem>=0.75);

console.log(global.a)
