// 3. Agora, crie um objeto. Adicione um atributo e um valor a ele. Depois, adicione apenas um atributo, sem definir um valor para ele. Em seguida, faça uma verificação boleana para checar se o segundo atributo foi definido ou é indefinido, escrevendo no log o resultado. Ex.: Estudate.id=25; Estudante.nome (verificar o atributo nome):

const aluno = {id: 25}
aluno.nome
console.log(aluno)

if (aluno.nome == undefined) {
    console.log('Nome do aluno indefinido')
}
else {
    console.log('Nome do aluno definido')
}

