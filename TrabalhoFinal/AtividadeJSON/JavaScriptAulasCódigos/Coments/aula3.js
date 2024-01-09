/* BOOLEAN */

console.log('Usando a função Boolean:', Boolean(9>7)) //True ou False
console.log('Boolean(0): ', Boolean(0)) //false
// 0 false, 1 true
console.log('Boolean(23): ', Boolean(23)) //True
console.log('Boolean(\'oi\'): ', Boolean('oi')) //True

/* FALSE */

let isAtivo = false
console.log('isAtivo =', isAtivo) // false
console.log('!isAtivo =', !isAtivo) // True
console.log('!!isAtivo =', !!isAtivo) // false

/* OBJETO */

const objeto1 = {}
objeto1.id = 23

console.log('objeto1.id: ', objeto1.id) // 23
console.log('objeto1.nome: ', objeto1.nome) // undefined

/* VERIFICAR VARIÁVEL */

console.log('!!objeto1.nome: ', !!objeto1.nome) // false, transforma para boolean

/* OPERAÇÕES */

console.log('!!5+5', !!5+5) // retorna 6
console.log(' : ', !!' ') // true

/* EXERCÍCIOS */

console.log('Exercícios')
console.log('!7', !7) //false
console.log('!!7',!!7) //true
console.log('!!7-7', !!7-7) //-6
console.log('!!(7-7)', !!(7-7)) //false, 0
console.log('!(7-7)', !(7-7)) //true