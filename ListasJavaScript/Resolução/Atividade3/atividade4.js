// 4.	Crie um array com um valor booleano, e um decimal qualquer. Ex.: true, 25.7 . Agora, exiba o tamanho desse array no console. Em seguida, adicione um elemento ao array, sem sobrrescrever os outros valores. Depois, exiba o valor da última posição no array.

const lista = [true, 25.2]
console.log(lista.length)
lista.push(42)
console.log(lista)
console.log(lista[2])