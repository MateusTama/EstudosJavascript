//JS (e diversas linguagens) trabalha com variáveis que criam referências na memória.
const a = {id:23}
console.log('a: ',a)
const b = a
console.log('b: ', b)
//obs.: abaixo seria errado, pois é uma atribuição a uma constante
//b = {id:19}
//para alterar um valor, acessa-se diretamente o atributo do objeto
b.id = 19
//e agora, o que imprimirá?
console.log('a.id, depois de alterar b.id:',
a.id)
/*imprimiu o valor de b em a. Isso ocorre porque ao dizer anteriormente que b=a, 
a linguagem coloca o mesmo endereço de memória para as duas.Logo,  quando 
o valor armazenado naquele endereço é alterado, 
as duas variáveis buscam o mesmo valor para mostrar.
*/

