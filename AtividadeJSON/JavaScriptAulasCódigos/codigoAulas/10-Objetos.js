//Criação de objetos de forma literal (sem JSON)
//um par de chaves representa um objeto.
//const prod1 = {}
const produto1 = {}
//diferentemente de Java, novos atributos podem ser criados dinamicamente
produto1.id = 1554
produto1.nome = 'Burguer Classic'
console.log('produto1: ',produto1.entrega) 

//ou assim
const produto2 = 
{
    id: 1555,
    nome: 'Australian Burguer'
}
console.log(produto2)
//pode-se também aninhar objetos
const produto3 = 
{
    id: 1556,
    nome: 'Italian Burguer',
    acompanhamento: 
    {
        salada: 'tomate',
        tempero: 'vinagre'
    }
}
console.log(produto3)
//acessando valores de um objeto
console.log('Exibindo o id',produto3['id'])
//ou usando variáveis
let campo='id'
console.log(produto3[campo])
const produto4 = 
{
    id: 908,
    nome: 'Tênis Mizuno'

}
produto4.corPredominante = 'Preto'
console.log(produto4)
/*
const estudate1 = {
    nome:'Dalila',
    notas: [7.5,8,9],
    status: 'aprovada'
}
console.log(estudate1);
console.log('Nota Primeiro Trimestre: ',estudate1.notas[0])
console.log('Nota Segundo Trimestre: ',estudate1.notas[1])
console.log('Nota Terceiro Trimestre: ',estudate1.notas[2])
*/

