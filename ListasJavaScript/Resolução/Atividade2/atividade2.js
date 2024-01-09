// 2.	Verifique se há erros nos códigos apresentados, e corrija se houver:

// {
// let endereço = `Rua D'Annunzio,' nr 123`
// }
// console.log(endereço)

//variavel utilizada fora do escopo

//PRIMEIRA FORMA
{
    let endereço = `Rua D'Annunzio,' nr 123`
    console.log(endereço)
}

//SEGUNDA FORMA
//var = escopo global
{
    var endereço = `Rua D'Annunzio,' nr 123`
}
console.log(endereço)