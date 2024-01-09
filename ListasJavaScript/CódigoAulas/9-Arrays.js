/*
/*Estrutura de dados que permite múltiplos valores,
acessados por números (índice da posição).
Em JS, o array é como um ArrayList do Java, ou seja, 
é heterogeneo (aceita vários tipos de dados em um mesmo array).

const valores = [7.5,9.0]
console.log (valores[0],valores[1])
console.log (valores)
//veja como JS é mais amigável que Java
console.log (valores[2])

//valores = [7.5,10]//TypeError: Assignment to constant variable.
//alterando corretamente um valor em uma array
valores[1] = 10 
//consultando um valor pela posicao
console.log('Novo valor: '+valores[1])
console.log ('Tamanho do array = ' + valores.length)
//declarando primeiro, adicionando depois:
const tamanhos = [];
tamanhos[0]= "P";
tamanhos[1]= "M";
tamanhos[2]= "G";

console.log('tamanhos',tamanhos);
//incluindo objetos em arrays


/*
Adicionando e removendo elementos:
Resumo, pode-se colocar um dinAmicamente em qualquer posição do array.
No entanto, é preciso tomar cuidado para não deixar buracos no array, bagunçando-o.
Exemplo: é possível criar um array com um ou nenhum elemento, 
e em seguida, adicionar outro na sétima posição!

const passarinhos = ['Tiziu'];
passarinhos[3] = 'Urutau'
console.log('passarinhos: ',passarinhos)
/*
   Agora, se pedir para remover o último elemento, é preciso lembrar 
   que o último foi adicionado na sétima posição, ou usar o método pop

//passarinhos[3] = ''
//ou
passarinhos.pop()
//ou usar o splice (emendar/remendar), començando em 3 e cortando fora 1
//passarinhos.splice(3,1)
console.log('passarinhos: ',passarinhos)
//Exercício:
/*Exercício (hoje não tem aula, professor de atestado médico):

Criar um array com cinco objetos, e as seguintes informações: id, nome, endereço. Preencher com dados fictícios.

Depois,  remover o último elemento do array, sem precisar informar o índice do elemento.

Em seguida, adicionar outro objeto na última posição do array, sem precisar saber o número do índice do último elemento do array.
*/
const listaPessoas = []
listaPessoas[0] = {id:2535,nome:'Raimundo'}
listaPessoas[1] = {id:2536,nome:'Ted Mosby'}
listaPessoas[2] = {id:2537,nome:'Merivalda',
sobreNome: 'Folha'}
console.log(`Objeto na posicao lista[1], 
somente o nome: `,
listaPessoas[1].nome);
//adicionando multiplos valores em pilha 
//no array:
listaPessoas.push({id:355,nome: 'Telmo'},
`sim, colocamos um 
objeto dentro de um array, 
e depois ainda adicionamos
 textos ou qualquer outra coisa`,25)
console.log (listaPessoas)
console.log ('Tamanho do array = ' 
+ listaPessoas.length)
//removendo o último elemento adicionado
listaPessoas.pop()
//saiu o 25 agora
console.log (listaPessoas)
console.log('Testando exclusão de elemento qualquer',
listaPessoas[1])
//splice(start, deleteCount)
listaPessoas.splice(1,1)
console.log(listaPessoas[1])
console.log('lista sem o excluído:',listaPessoas)
//Removendo elementos undefined
//de um array:
console.log('Criando lista sem undefined:')
const novoArray = listaPessoas.filter(item=>item!=undefined)
console.log('lista sem undefined: ',novoArray)
//console.log('tamanho da lista sem undefined',novoArray.length)