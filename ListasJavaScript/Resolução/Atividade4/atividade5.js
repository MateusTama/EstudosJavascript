// 5.	Faça um laço que percorra o seguinte o array [5, 8, 7, 10]  , e, quando ele encontrar o número 7, que ele informe ao usuário a posição do número procurado e saia imediatamente do laço.

const lista = [5, 8, 7, 10]

for (indice in lista) {
    if (lista[indice] == 7) {
        console.log(`O número 7 foi encontrado na posição: ${indice}!`)
        break
    }
}