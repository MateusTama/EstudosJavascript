// 4.	Considere o seguinte array: [7,8,undefined,5,9]. Agora, fala um laço para exibir os valores do array, exceto os indefinidos (undefined).

//Considerando undefined e não ,,

const lista = [7,8,undefined,5,9]
for (indice in lista) {
    if (lista[indice] == undefined) {
        continue
    }
    else
    {
        console.log(lista[indice])
    }
}

console.log()
console.log('.....2 FORMA.....')
console.log()

//considerando ,, e não undefined

const lista1 = [7,8,,5,9]

for (indice in lista1) {
    console.log(lista1[indice])
}