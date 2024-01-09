// 6.	Qual valor será exibido no código abaixo?
// const a = {id:12}
// console.log('a: ',a)
// const b = a
// b.id = 23
// console.log(a.id)

//Será exibido primeiramente o objeto A
//Depois o objeto A terá seu valor trocado através do objeto B
//Logo após esse valor, 23, será "printado" através do console.log

const a = {id:12}
console.log('a: ',a)
const b = a
b.id = 23
console.log(a.id)