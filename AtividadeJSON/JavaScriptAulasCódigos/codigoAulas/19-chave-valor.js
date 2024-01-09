//revisando o conceito de chaves (variáveis) e valores
//Assunto básico, mas importante reforçar e aprofundar. 
//Esta possibilidade sintática será usada posteriormente (aninhamento de objetos).
const numero = 12345

function verificaNumero()
{
    const numero = 54321
    //const numero = 54321//se descomentar o que acontece?
    return numero
}
console.log(numero);
console.log(verificaNumero());
//é possível também fazer aninhamentos de chaves e valores valores:
const pedido = 
{
    id: 0012,
    descricao: 'Conserto do para-brisa',
    cliente: 
    {
        id:2556,
        nome:'Alcebíades Galhardo',
        telefone:'047-xxxxxxxx'
    }
}
console.log(pedido);


