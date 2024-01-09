// 6. Utilizando agora operações lógicas, verifique a saída das expressões abaixo:
// a) (''||undefined||null||(8>7))
// b) (''||undefined||null||9)
// c) (''||undefined||null||'Oi')
// d) !!(''||undefined||null||'Oi')
// e) (''||undefined||null||{})
// f) !!(''||undefined||null||{})

console.log('Expressão Lógica 8>7: ',(''||undefined||null||(8>7)));// retorna true
console.log('Expressão Lógica (9): ',(''||undefined||null||9));// retorna 9
console.log('E agora, sem !!',(''||undefined||null||'Oi'));//true também. Sem o not not, retorna o valor
console.log('E agora, com !! e string preenchida: ',!!(''||undefined||null||'Oi'));//a última é true. Entra nela. O !! converte para boolean
console.log('E agora, com objeto e sem !!?',(''||undefined||null||{}));//entra na parte verdadeira, e sem o not not
console.log('E agora, com objetos e !!: ',!!(''||undefined||null||{}));//true, pois objeto vazio é true