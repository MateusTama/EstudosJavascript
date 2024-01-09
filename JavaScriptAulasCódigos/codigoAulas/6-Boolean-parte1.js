//https://www.w3schools.com/js/js_booleans.asp
console.log('Usando a função Boolean',Boolean(9>7))
console.log('Sem usar a função Boolean',(9>7))
/*
Em JS, variáveis que contenham algum valor retornam true.
E o contrário, false.
Obs.: zero (e - zero) é considerado vazio, ausência de valor. Ou seja, false.

*/
console.log('Boolean(0): ',Boolean(0))//false
console.log('Boolean(-0): ',Boolean(-0))//false
console.log('Boolean(1): ',Boolean(1))//true
console.log('Boolean(23): ',Boolean(23))
console.log('Boolean(\'Oi\': )',Boolean('Oi'))//uma string preenchida é true
console.log('Boolean(0000): ',Boolean(0000))
console.log('Boolean(0001): ',Boolean(0001))
console.log('Boolean(0010): ',Boolean(0010))
console.log('Boolean(\'true\'): ',Boolean('true'))
console.log('Boolean(\'false\'): ',Boolean('false'))


/**
 * abaixo, apresenta-se o conceito de negação,
 * e a prática da negação da negação.
 */
let isAtivo=false
console.log('isAtivo = ',isAtivo);
isAtivo = 1
console.log('!isAtivo = ', !isAtivo);
console.log('!!isAtivo = ',!!isAtivo); //uma negação anula a outra, e retorna ao valor original

const objeto1 = {}
objeto1.id=23
//Em JS, atributos de objetos podem ser criados dinâmicamente
//Portanto, é possível que um atributo acessado não possua nada (undefined)
console.log('objeto1.id: ',objeto1.id)
console.log('objeto1.nome: ',objeto1.nome='hj')
//Caso o/a programador queira verificar SE existe algo em um atributo, pode fazer assim:
console.log('!!objeto1.nome: ',!!objeto1.nome)
//ou usando a função Boolean()
console.log('Boolean(objeto1.nome): ',Boolean(objeto1.nome))

