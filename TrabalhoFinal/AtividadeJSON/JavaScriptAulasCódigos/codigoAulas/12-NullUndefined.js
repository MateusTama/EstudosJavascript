//Undefined: valor
//Nulo: referência
//console.log(y) // aqui dá erro, pois y não foi criado
//agora, olhe o resultado
let x;//não inicializada
console.log(x)
//acima imprime undefined, pois não foi atribuído nenhum valor
//console.log(x2)//imprime "is not defined" (erro)

x = null //inicializa, mas com valor nulo
console.log(x)
//agora, o valor nulo é atribuído. 
//Nulo siginifica definição com ausência de valor, ausência de endereço.
//é muito utilizado para 'zerar' um objeto. 
//logicamente, tentar utiizar essa variável dará erro
//console.log(x.charAt(0));

//abaixo, o resultado também é diferente.
//uma const sempre precisa ser inicializada
// por isso, acaba evitando a mensagem undefined
const objeto1 = {}
console.log('objeto1 {} = ',objeto1)

//agora, repare nas diferenças abaixo
console.log('objeto1 id (dinamicamente): ',
 objeto1.id)
//acima, ele não acusa erra, 
//mas utiliza a palavra reservada undefined para te informar 
//objeto1.id = undefined é possível fazer isso também, mas não é uma boa prática.
//deve-se deixar a palavra undefined para a linguagem te informar isso.
//também, deve-se tomar cuidado para não acessar atributos de objetos nulos:
const objeto2 = null
//console.log('objeto2, null: ',objeto2.id) //gera erro
/*
Ainda, é interessante saber que 
é possível acessar o atributo indefinido
 de um objeto
não nulo, mas não um atributo 
deste atributo (pois ele entende 
    como um outro objeto?)
*/
const loja = {}
console.log(loja.id);
//console.log(loja.id.nome);//gera erro

/*Obs.:JS oferece também o operador delete,
que pode ser usado em objetos, para remover uma propriedade,
e logicamente, seu valor. Após o delete, o resultado é undefined.
Fonte: https://www.w3schools.com/howto/howto_js_remove_property_object.asp
*/
const estudante1 = {
    id:107,
    nome: 'Joana',
    titulo: 'lenda da programação'
}
delete estudante1.titulo
console.log('deletando atributo de estudante1', 
estudante1.titulo) //undefined
console.log('estudante1.novoAtributo', 
estudante1.novoAtributo)//undefined

//zerando referências:
let estudante2 = 
{
    id:108,
    nome: 'João',
    titulo: 'lenda da programação'
}
//estudante2 = null
console.log('estudante2', estudante2);









