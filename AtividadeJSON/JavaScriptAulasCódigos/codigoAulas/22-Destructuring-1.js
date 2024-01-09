//novo recurso do ES2015
const estudante = 
{
    nome: 'Margaret',
    instituicao: 'IFC',
    notasEnem: 
    {   
        Geografia:10,
        Redação: 9,
        Matemática: 7.5
    }
}
//
//criação de variáveis com o mesmo nome dos atributos de origem
const {nome, instituicao} = estudante 
console.log(nome,instituicao);
//criando variáveis com nomes diferentes dos atributos originais
//atributo:novoNome
const {nome:meuNome, instituicao: minhaInstituicao}=estudante
console.log(meuNome,' - ', minhaInstituicao);
/*tentando acessar atributos indefinidos. 
Se for undefined, escreve indefinido. 
Se não, escreva o valor original
Obs.: se deixar apenas sobrenome embaixo, 
retorna undefined */
const {sobreNome='Indefinido', instituicao:testandoInstituicao = null} = estudante 
console.log('sobreNome: ', sobreNome,'testandoInstituicao',testandoInstituicao);
/*É possível também pegar atributos de um objeto que é um atributo de outro objeto
Ex.: notasEnem é um objeto, que é um atributo do objeto Estudante.
Assim, aponta-se o atributo/objeto que se quer desestruturar,
e depois, cria-se as variáveis locais para cada atributo do objeto/atributo
Ex.: variáveis locais: mtm, fsc (se não tiver nota, me dá um 10 por favor)*/
const {notasEnem: {Matemática:mtm,Física:fsc=10} } = estudante
console.log('notasEnem',mtm,fsc);

const {nome:nome2, notasEnem: {Matemática:mtm2,Física:fsc2=7} } = estudante
console.log('notasEnem, com nome2',nome2, mtm2,fsc2);
/*Tomar cuidado para pegar somente atributos 
de objetos/atributos que existam,
senão, o código gera erro.
Ex.:*/
//const {historicoEscolar: {filosofia:fls, programacao:prg} } = estudante
//Acima: TypeError: Cannot read properties of undefined
//console.log(fls,prg);
// (reading 'filosofia')
/*
Em outras palavras, JS gera erro se tentar
 desestruturar uma propriedade indefinida, se esta
por si  só for um objeto. 
Veja que abaixo não gera erro, apenas undefined:
*/
const {aprovado} = estudante
console.log('aprovado', aprovado);

const {nome:nomeTratado = 'Não informado',
instituicao: instituicaoTratada='Não informado'} = estudante
console.log(nomeTratado,instituicaoTratada);


const {nome:nomeTratado2 = 'Não informado',
instituicao: instituicaoTratada2='Não informado ',
notasEnem:{Matemática:notaMTMTratada=0}
} = estudante
console.log(nomeTratado2,instituicaoTratada2,notaMTMTratada);


