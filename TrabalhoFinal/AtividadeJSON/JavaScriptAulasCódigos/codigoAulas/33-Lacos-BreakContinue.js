/*
break e continue causam desvios de fluxo em laços e no switch:
*/
const listaNumeros = [, 5, 7, , 4]
console.log('O Break sai imediatamente do laço:')
for (let indice in listaNumeros) {
    console.log(`Posição preenchida: ${indice} -  valor: ${listaNumeros[indice]}`);
    if (listaNumeros[indice] == 7) {
        console.log('Encontramos o número 7 na posição ', indice)
        break //age apenas em laços e condicionais
    }
}
console.log('O continue pula para a próxima iteração')
for (let indice in listaNumeros) {
    //pula o sete
    if (listaNumeros[indice] == 7) {
        continue //age apenas em laços. 
    }
    console.log(`CONTINUE Posição preenchida: ${indice} - valor: ${listaNumeros[indice]}`);
}

