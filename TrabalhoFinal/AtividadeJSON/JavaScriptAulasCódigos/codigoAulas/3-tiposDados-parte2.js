//inteiros e decimais são number:
let aula = 3;
console.log('typeof 3',typeof aula)
/*o tipo number pode ser tanto para inteiros como para decimais, 
//e independente de seu tamanho.*/

let nota = 8.7
console.log('typeof 8.7', typeof nota)

//inteiros: limite de 15 dígitos
//decimais: tomar cuidado com arredondamentos
let testeNUmero = 0.1 + 0.2
console.log('testeNUmero: ',testeNUmero)
//resolvendo:
testeNUmero = (0.2 * 10 + 0.1 * 10) / 10;
console.log(testeNUmero)
//é possível também arredondar para um número limite de casas decimais:
testeNUmero = (15.6325).toFixed(2);
console.log('Número arredondado com toFixed', testeNUmero)

//booleanos
let statusAprovado = true
console.log(typeof statusAprovado)

//textos (strings)
let nome = 'Javascript Moderno'
console.log(typeof nome)

