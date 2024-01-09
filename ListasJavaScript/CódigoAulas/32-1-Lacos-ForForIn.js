/*
const listaNotas = [7.5,8.0,9.0]
//console.log(listaNotas)
for (let i=0;i<listaNotas.length;i++)
{
    console.log('Nota '+i+ ' - '+ listaNotas[i])
}
/*
/*
Bastante utilizado para iterar arrays.

for (let i=0;i<3;i++)
{
    console.log(`i: ${i}`);
}

const listaNumeros = [,7,,10,10]

for (let i=0;i<listaNumeros.length;i++)
{
    console.log(`Elemento na posicao ${i} `,
     listaNumeros[i]);
} 

/*
Outra maneira é percorrer um array com for in.
Obs.: repare que as posições undefined são ignoradas.
*/
/*
for (indice in listaNumeros)
{
    console.log(`FOR IN Elemento na posicao ${indice} `,
     listaNumeros[indice]);
}
/*
A diferença aqui, é que o FOR IN pula elementos undefined

/*
É possível utilizá-lo para percorrer objetos,
entendo-os como arrays. Neste caso, o índice para
acessar cada atributo do objeto é entendido
como a chave (nome do atributo na posição do índice).
Exemplo : 
objEstudante[atributo 0]: atributo na posição 0;
objEstudante [atributo 1]: atributo na posição 1;
objEstudante[atributo 2]:  atributo na posição 2;
*/ 

const objEstudante = 
{
    nome: 'Aderbal',
    sobreNome: '',
    nota: 10
}
console.log('For in para percorrer um objeto:')
for (let chave in objEstudante)
{
    //Abaixo, imprime o nome do atributo, e o valor,
    //na ordem de 0 a n, incremenando de um e um,
    //até terminar a lista de atributos do objeto.
    console.log(chave, objEstudante[chave]);   
}

console.log(`For in para percorrer um objeto,
 que contém outro objeto:`)
const estudante2 =
{
    nome: 'Adeolise',
    sobreNome: '',
    notas :
    {
        geografia : 10,
        historia: 8,
        matematica: 9
    }
}
for (let atributo in estudante2)
{
    console.log(atributo, estudante2[atributo]);
}
console.log(estudante2['notas']);

//imprimindo somente o campo que é objeto:
console.log(`imprimindo somente o campo que é objeto:`)
for (let atributo in estudante2)
{
    if (typeof atributo === Object )
    console.log(atributo, estudante2[atributo]);
}
//ou:
console.log(estudante2['notas']);

const numeros = [4,5,6,7,8,9]
//é possível  (não recomendado) utilizar laço/continue com rótulos):
externo: for (let i in numeros)
{
    for (let j in numeros)
        if (i==j)
        {
            console.log(`i: ${i}, j: ${j}`);
            continue externo
        }
}
/*
Exercício:
Faça uma função que imprima os números repetidos 
dentre dois arrays quaisquer.
Ex.: [10,5,8],[5,8,0]
*/
console.log('Exercício: ')

const imprimeRepetidos = function (a=[],b=[])
{
    for(let i in a)
    {
        for (let j in b) 
        {
            if (a[i]==b[j]) 
            {
                console.log(`REPETIDOS: a[${i}]==b[${j}],
                 pois i: ${a[i]} e j: ${b[j]}`);                
            }
        }
    }

}
imprimeRepetidos([10,5,8],[5,8,0])
