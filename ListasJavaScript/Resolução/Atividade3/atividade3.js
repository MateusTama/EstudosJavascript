// 3.	Utilizando o Visual Studio Code, crie um array que armazene as notas de cinco estudantes, utilizando casas decimais. Ex.: nota 7,5. Depois, crie sentenças de código que alterem a nota do primeiro, do terceiro e do último estudante da lista.

const estudantes = []
estudantes[0] = { nome: 'Bruno', nota: 7.4 }
estudantes[1] = { nome: 'Davi', nota: 7.5 }
estudantes[2] = { nome: 'Dudu', nota: 9.5 }
estudantes[3] = { nome: 'Iago', nota: 8.6 }
estudantes[4] = { nome: 'Lucas', nota: 6.5 }
console.log(estudantes)
estudantes[0].nota = 7
estudantes[2].nota = 8
estudantes[4].nota = 10
console.log(estudantes)