//Pontos são utilizados para acessar funções de outras classes, ou propriedades de objetos/classes

console.log('typeof Math: ', typeof Math);//object
console.log('Math.PI: ', Math.PI);//acessando uma proriedade de um object. Obs.: em JS, Math é uma object
console.log('typeof Math.PI: ', typeof Math.PI);//number
console.log('Math.sqrt(81): ',Math.sqrt(81));//acessando um método ou function de uma classe (Math)
console.log('typeof Math.sqrt: ', typeof Math.sqrt); // function
//lembrando, tudo é traduzido para função:
console.log('typeof Object', typeof Object)//object

const pedido1 = {}
pedido1.vendedor = 'Júnior'
console.log(pedido1.vendedor);

//é possível usar a palavra chave this para criar um atributo público (acessível de fora do escopo)

function constroiDadosCliente(nome)
{
    this.nomeCliente = nome,
    this.exibirDados = function ()
    {
        console.log('criando uma funcion dentro de outra com a this: ', this.nomeCliente);
    }
}
const objeto1 = new constroiDadosCliente('Arlinda')
const objeto2 = new constroiDadosCliente('Theobaldo')

console.log('objeto1', objeto1.nomeCliente)
console.log('objeto2', objeto2.nomeCliente)
objeto2.exibirDados()
