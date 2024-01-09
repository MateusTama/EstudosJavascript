//if com apenas uma sentença:
const mediaFinal = 0
if (mediaFinal == 0)
  console.log('Reprovado com louvor. Média: ', mediaFinal);

//if com bloco de códigos (várias sentenças)
/*
if (condition) {
  //  block of code to be executed if the condition is true
}
*/
let media = 0
const [nota1, nota2, nota3] = [10, 7, 8, 0, 0]
let frequencia = 75
if (frequencia >= 75) {
  media = (nota1 + nota2 + nota3) / 3
  console.log('Sua média é:', media);
}
else
  console.log('Reprovado por frequência.');

let mensagem = ''
const hora = 1.00 //obs.: se usar 00.00 ele entende ser um octal
if ((hora < 12.00)) {
  mensagem = 'Bom dia'
}
else if ((hora > 12.00) && (hora < 19.00)) {
  mensagem = 'Boa tarde'
} else if (hora >= 19.00)
  mensagem = 'Boa noite'
else
  mensagem = 'Vamos almoçar'
console.log(mensagem);

//console.log(typeof 0.0);
//console.log(Number.isInteger(00.));//base octal

//Outra exemplo de if-else
/*

Exercício:
faça uma constante que recebe uma função que imprime 
no log do console
mensagens específicas para diferentes faixas de notas 
(ex.: nota = 10, nota =0)
*/ 
const imprimirResultado = function (nota) {
  let texto = `Nota: ${nota}, `
  if (nota == 10)
    texto += 'estudante supremo, aprovado com honras!'
  else if ((nota < 10) && (nota >= 9))
    texto += 'excelente, parabéns, aprovado!'
  else if ((nota < 9) && (nota >= 8))
    texto += 'parabéns estudante, aprovado!'
  else if ((nota < 8) && (nota >= 6))
    texto += 'estudante aprovado!'
  else if ((nota < 6) && (nota >= 0))
    texto += 'estudante reprovado. Sucesso na próxima tentativa.'
  else
    texto = 'Informe uma nota válida (entre 0 e 10)'
  console.log(texto)
}


imprimirResultado(11)
//Exibindo mensagem de boa noite:
const time = new Date().getHours();
//const time = 0.0;
let greeting;
if ((time>0.0)&&(time <= 5)) {
  greeting = "Boa madrugada";
} else if ((time >5)&&(time<12)) {
  greeting = "Bom dia";
} else if ((time>12)&&(time<=18)) {
  greeting = "Boa tarde";
  
} else if((time>18)&&(time<=24.00)||time==0.0)
{
greeting = "Boa noite";
}
else if (time>=23.59) {
  greeting = "Formado da hora deve ser entre 0 e 24.";
  }
  else
  greeting = "Vamos almoçar";

console.log('greeting: ', greeting, 'hora:', time)




